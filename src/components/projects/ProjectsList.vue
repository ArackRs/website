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
      <div class="item bg-filter" v-on:click="selectProject(project.name)">
        <div class="box-img">
          <img :src="project.logo" alt="Image" />
        </div>
        <div class="box-txt">
          <h1>{{ project.name }}</h1>
          <p>{{ project.overview }}.</p>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .list {
    display: flex;
    gap: 1rem;
    .item {
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