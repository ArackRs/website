<script setup>
import { ref, onMounted } from 'vue';
import { FirebaseService } from '@/shared/service/firebase.service.js';
import ProjectsGallery from '@/components/projects/ProjectsGallery.vue'

const projects = ref([]);
const loading =ref(true);

onMounted(async () => {
  try {
    projects.value = await FirebaseService.get('projects');
  } catch (error) {
    console.error('Error en la solicitud:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <ProjectsGallery :projects="projects" :loading="loading" />
</template>