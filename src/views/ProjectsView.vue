<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { FirebaseService } from '@/shared/service/firebase.service.js';
//import axios from 'axios';
import ProjectsSectionGallery from '@/components/projects/ProjectsGallery.vue'

const projects = ref([]);
//const source = axios.CancelToken.source();

onMounted(async () => {
  try {
    projects.value = await FirebaseService.get('projects');
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
});

onUnmounted(() => {

});
</script>

<template>
  <ProjectsSectionGallery :projects="projects" />
</template>