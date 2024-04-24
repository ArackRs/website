<script setup>
import { defineProps } from 'vue'
const { projects } = defineProps(['projects']);
import { useRouter } from 'vue-router';
const router = useRouter();
const selectProject = (url) => {
  router.push('my-projects/' + url);
};
</script>

<template>
  <section id="projects-section" class="hero">
    <div class="projects-container container">
      <div class="projects-header">
        <h1 class="heading">{{$t('projects.heading')}}</h1>
        <p class="description">{{$t('projects.description')}}</p>
      </div>
      <div class="projects-content content">
        <template v-for="(project, index) in projects" :key="project.id">
          <div class="projects-item bg-filter" v-on:click="selectProject(project.url)">
            <div class="text">
              <h4>WORK COLABORATIVE</h4>
              <h1>{{ project.title }}</h1>
              <p>{{ project.overview }}.</p>
              <pv-chip v-for="tech in project.technologies" :key="tech" style="font-size: 0.7em; margin-right: 0.5rem">{{ tech }}</pv-chip>
            </div>
            <div class="image bg-filter" :class="{ 'image-tall': index % 2 === 0, 'image-short': index % 2 === 1 }">
              <img :src="'src/assets/images/' + project.imagen" alt="Image" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-header {
  .description {
    width: min(50em, 100%);
  }
}
.projects-content {
  padding-top: 5rem;
  align-items: initial;
  gap: 1rem;
  .projects-item {
    width: min(30rem, 100%);
    height: min-content;
    flex-grow: 1;
    gap: 1rem;
    padding: 0;
    &:hover {
      border: 1px solid var(--color-text-mute);
      cursor: pointer;
    }
    .text {
      width: 100%;
      padding: 2rem;
    }
    .image {
      overflow: hidden;
      width: 100%;
      padding-left: 2rem;
      border-radius: 0 0 20px 20px;
      height: 10rem;

    }
  }
}
</style>