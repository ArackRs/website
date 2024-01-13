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
  <section id="projects">
    <div class="projects-container container">
      <div class="projects-header">
        <h1 class="heading">My Projects</h1>
        <p class="description">
          I am a software developer with a passion for creating and learning. I
          have experience in web development, mobile development, and desktop
          development. I am currently working on a few projects, including a
          mobile app and a web app. I am also learning about machine learning
          and artificial intelligence.
        </p>
      </div>
      <div class="projects-content content">
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
    </div>
  </section>

</template>

<style scoped>
  #projects {
    min-height: 100vh;
    padding-bottom: 10rem;
  }
  .projects-container {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    width: 100%;
  }
  .projects-content {
    padding-top: 5rem;
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