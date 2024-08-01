<script setup>
import { ref, onMounted } from 'vue'
import { FirebaseService } from '@/services/firebase.service.js';
import ProjectsGallery from '@/components/projects/ProjectsGallery.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import FilterByCategory from '@/components/projects/FilterByCategory.vue'

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
  textLoad();
  setInterval(textLoad, 10000);
});
const secText = ref(null);

const textLoad = () => {
  if (secText.value) {
    setTimeout(() => {
      secText.value.textContent = 'Academicos';
    }, 0);
    setTimeout(() => {
      secText.value.textContent = 'Personales';
    }, 5000);
  }
};
</script>

<template>
  <header class="projects__header">
    <div class="container">
      <h1 class="heading text-animation">{{$t('projects.heading')}}</h1>
      <h2 class="subtitle animated-text" >Proyectos
        <span style="font-weight: bold;" class="typed sec-text" ref="secText"></span>
      </h2>
      <p class="description">{{$t('projects.description')}}</p>
      <search class="flex justify-content-between align-items-center">
        <FilterByCategory :value="projects" @update="updateFilteredProjects" />
        <pv-data-view-layout-options v-model="layout" />
      </search>
    </div>
  </header>
  <main>
    <section id="projects-section" class="projects">
      <div class="projects-container container">
        <div class="projects__content">
          <template v-if="layout === 'grid'">
            <ProjectsGallery :projects="filteredProjects" :loading="loading" />
          </template>
          <template v-if="layout === 'list'">
            <ProjectsList :projects="filteredProjects" :loading="loading" />
          </template>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.typed {
  position: relative;
  white-space: nowrap;
}
.typed.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  border-left: 2px solid whitesmoke;
  animation: animate 5000ms steps(12) infinite;
}
.typed.sec-text {
  background: linear-gradient(to right, var(--color-tertiary) 50%, transparent 50%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  mix-blend-mode: screen;
}

@keyframes animate {
  40%, 60% {
    left: calc(100% + 4px);
  }
  100% {
    left: 0;
  }
}

section {
  padding-top: 0;
}
.projects__content {
  width: 100%;
}
</style>
