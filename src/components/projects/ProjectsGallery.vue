<script setup>
const { projects, loading } = defineProps(['projects', 'loading']);
import { useRouter } from 'vue-router';
const router = useRouter();
const selectProject = (name) => {
  router.push('my-projects/' + name);
};
</script>

<template>
  <div class="gallery grid grid-cols-1 lg:grid-cols-2 w-full">
    <template v-if="!loading">
      <article class="item hover:shadow-5 bg-card" @click="selectProject(project.name)"
           v-for="project in projects" :key="project.id"
           v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <figure class="box-img">
          <img :src="project.image" alt="Image" />
        </figure>
        <hgroup class="box-txt">
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
  article {
    width: 100%;
    min-height: 20rem;
    aspect-ratio: 16 / 10;
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
    padding: 0;
    cursor: pointer;

    .box-img {
      width: 100%;
      min-height: 50%;
      padding-left: var(--space-pg);
      transition: all 1s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 2s;
        border-radius: 20px 0 20px 0;
        z-index: 1000;
      }
    }
    .box-txt {
      min-height: 50%;
      padding: var(--space-pg);
    }
  }
}

@media (hover:hover) {
  .projects__content .item {
    &:hover {
      background: var(--color-primary-mute);
    }
    .box-img:hover {
      min-height: 100%;
      padding-left: 0;
    }
    .box-img:hover > img {
      transition: all 1s;
    }
  }
}

@media (max-width: 800px) {
  .gallery {
    //grid-template-columns: repeat(1, 1fr);
  }
}
</style>