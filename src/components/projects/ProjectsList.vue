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
  <div class="list content">
    <template v-for="project in projects" :key="project.id">
      <div class="projects-item bg-filter" v-on:click="selectProject(project.url)">
        <div class="image bg-filter">
          <img :src="'src/assets/images/' + project.logo" alt="Image" width="70" />
        </div>
        <div class="text">
          <h1>{{ project.title }}</h1>
          <p>{{ project.overview }}.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

  .list {
    display: grid !important;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    .projects-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      &:hover {
        border: 1px solid var(--color-text-mute);
        cursor: pointer;
      }
      .text {
        width: max-content !important;
      }
    }
  }
</style>