<script setup>
import { ref } from 'vue';
const projects = ref([
  { id: '1', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal',
    url: 'vopilot', image: 'logo_vopilot.png' },
  { id: '2', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal',
    url: 'vopilot', image: 'logo_vopilot.png' },
  { id: '3', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal',
    url: 'vopilot', image: 'logo_vopilot.png' },
  { id: '4', title: 'Vopilot', description: 'Education web application, which helps young people find their',
    url: 'vopilot', image: 'logo_vopilot.png' },
  { id: '5', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal',
    url: 'vopilot', image: 'logo_vopilot.png' },
  { id: '6', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal',
    url: 'vopilot', image: 'logo_vopilot.png' }
]);
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
          <router-link to="/project/1">
            <div class="projects-item bg-filter">
              <div class="image bg-filter">
                <img :src="'src/assets/images/' + project.image" alt="Image" width="50" />
              </div>
              <div class="text">
                <h1>{{ project.title }}</h1>
                <p>{{ project.description }}.</p>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #projects {
    min-height: 100vh;
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
    }
  }
</style>