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
    <article class="item bg-filter" @click="selectProject(project.name)"
         v-for="project in projects" :key="project.id"
         v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
      <figure class="box-img">
        <img :src="project.logo" alt="Image" />
      </figure>
      <hgroup class="box-txt">
        <h1>{{ project.name }}</h1>
        <p>{{ project.overview }}</p>
      </hgroup>
    </article>
  </div>
</template>

<style scoped>
  .list {
    display: flex;
    gap: 1rem;
    article {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      gap: 1rem;
      padding: 1rem;
      &:hover {
        background: var(--color-primary-mute);
      }
      .box-img {
        min-width: 70px;
        height: 70px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .box-txt {
        flex-grow: 1;
        h1 {
          font-size: 1.5em;
          font-weight: bold;
          color: var(--color-text);
        }
        p {
          font-size: 1em;
          color: var(--color-text-mute);
        }
      }
    }
  }
</style>