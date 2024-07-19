<script setup>
import { ref, onMounted } from 'vue'
import { FirebaseService } from '@/shared/service/firebase.service.js';
import ProjectsGallery from '@/components/projects/ProjectsGallery.vue'
import CodepenBlobBackgroundAnimation from '@/components/CodepenBlobBackgroundAnimation.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import FilterByCategory from '@/shared/components/FilterByCategory.vue'

const projects = ref([]);
const loading = ref(true);
const layout = ref('grid')
const filteredProjects = ref([]);
const updateFilteredProjects = (projects) => {
  filteredProjects.value = projects;
};

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
  <section id="projects-section" class="projects">
    <div class="projects-container container">
      <div class="projects__header">
        <h1 class="heading">{{$t('projects.heading')}}</h1>
        <p class="description">{{$t('projects.description')}}</p>
      </div>
      <div class="projects__content">
        <div class="flex justify-content-between align-items-center pb-5">
          <FilterByCategory :value="projects" @update="updateFilteredProjects" />
          <pv-data-view-layout-options v-model="layout" />
        </div>
        <template v-if="layout === 'grid'">
          <ProjectsGallery :projects="filteredProjects" :loading="loading" />
        </template>
        <template v-if="layout === 'list'">
          <ProjectsList :projects="filteredProjects" :loading="loading" />
        </template>
      </div>
    </div>
  </section>
  <CodepenBlobBackgroundAnimation />
</template>

<style scoped>
.projects__content {
  width: 100%;
}
</style>
