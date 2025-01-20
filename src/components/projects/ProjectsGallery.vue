<script setup>
const { projects, loading } = defineProps(['projects', 'loading']);
import { useRouter } from 'vue-router';
const router = useRouter();
const selectProject = (name) => {
  router.push('my-projects/' + name);
};
</script>

<template>
  <div class="gallery">
    <template v-if="!loading">
      <article class="w-full min-h-80 p-0 aspect-[16/10] flex gap-0 flex-col-reverse cursor-pointer hover:shadow-5 hover:bg-main-dark bg-card"
           @click="selectProject(project.name)"
           v-for="project in projects" :key="project.id"
           v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <figure class="min-h-[50%] pl-5 hover:min-h-full hover:!pl-0 transition-all duration-1000">
          <img :src="project.image" :alt="project.name" />
        </figure>
        <hgroup class="min-h-[50%] p-5">
          <h1>{{ project.name }} </h1>
          <p>{{ project.overview }}</p>
        </hgroup>
      </article>
    </template>
    <template v-else>
      <div v-for="n in 6" :key="n" class="item bg-filter">
        <div class="box-img">
          <pv-skeleton width="100%" height="20rem" />
        </div>
        <div class="box-txt">
          <pv-skeleton width="40%" height="2rem" />
          <pv-skeleton width="100%" height="1.5rem" class="mt-2" />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
img {
  border-radius: 20px 0 20px 0;
}
</style>