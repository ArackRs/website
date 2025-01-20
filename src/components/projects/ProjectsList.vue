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
  <div class="list">
    <article class="w-full max-h-32 p-5 flex justify-between items-center hover:bg-main-mute cursor-pointer bg-card"
             @click="selectProject(project.name)"
             v-for="project in projects" :key="project.id"
             v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
      <figure class="min-w-[70px] h-[70px] rounded-full">
        <img :src="project.logo" :alt="project.name" />
      </figure>
      <hgroup class="h-full overflow-hidden">
        <h1 class="text-xl">{{ project.name }}</h1>
        <p class="text-sm">{{ project.overview }}</p>
      </hgroup>
    </article>
  </div>
</template>

<style scoped>
.list {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 900px) {
  .list {
    grid-template-columns: 1fr !important;
  }
}
</style>