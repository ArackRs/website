<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { HttpService } from '@/services/http.service.js';
import axios from 'axios';
import ProjectsSectionGallery from '@/components/projects/ProjectsGallery.vue'

const projects = ref([]);
const source = axios.CancelToken.source();

onMounted(async () => {
  try {
    projects.value = await HttpService.get('projects', source.token);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Solicitud cancelada:', error.message);
    } else {
      console.error('Error en la solicitud:', error);
    }
  }
});

onUnmounted(() => {
  source.cancel('Solicitud cancelada al desmontar el componente');
});
</script>

<template>
  <ProjectsSectionGallery :projects="projects" />
</template>