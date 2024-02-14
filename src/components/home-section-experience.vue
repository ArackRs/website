<script setup>
import { ref } from 'vue';
const works = ref([
  { id: '1', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal professional career',
    url: 'vopilot', image: 'logo_vopilot.png', date: 'Dec 16, 2023', members: '2 members',
    inspired: 'Inspired by my final project of the SI173 course as a solution to the problem of students who do not know what to do professionally.',
    role: 'FullStack Developer', contributions: [
      'Lideré la arquitectura de la aplicación, garantizando un rendimiento eficiente y una escalabilidad adecuada para equipos en crecimiento.',
      'Integramos características de videollamadas y mensajería instantánea para mejorar la comunicación entre equipos remotos.',
      'Implementé un sistema de seguimiento de tareas que resultó en un aumento del 25% en la productividad del equipo.'
    ] },
  { id: '2', title: 'Vopilot', description: 'Education web application, which helps young people find their ideal professional career',
    url: 'vopilot', image: 'logo_vopilot.png', date: 'Dec 16, 2023', members: '2 members',
    inspired: 'Inspired by my final project of the SI173 course as a solution to the problem of students who do not know what to do professionally.',
    role: 'FullStack Developer', contributions: [
      'Lideré la arquitectura de la aplicación, garantizando un rendimiento eficiente y una escalabilidad adecuada para equipos en crecimiento.',
      'Integramos características de videollamadas y mensajería instantánea para mejorar la comunicación entre equipos remotos.',
      'Implementé un sistema de seguimiento de tareas que resultó en un aumento del 25% en la productividad del equipo.'
    ] }
]);
</script>

<template>
  <section id="projects">
    <div class="projects-container container">
      <div class="projects-header header">
        <h1>Experience in Software Projects</h1>
        <p>Featured and collaboratively developed projects</p>
      </div>
      <div class="projects-content content">
        <template v-for="work in works" :key="work.id">
          <div class="projects-item bg-filter">
            <div class="item-header">
              <img :src="'src/assets/images/' + work.image" alt="Image" width="100" />
              <div class="text">
                <h1>{{ work.title }}</h1>
                <p>{{ work.description }}</p>
                <pv-tag value="ver web app"></pv-tag>
              </div>
            </div>
            <div class="item-content">
              <p>{{ work.inspired }}</p>
              <h4>Role: {{ work.role }}</h4>
              <h4>Contributions:</h4>
              <ul v-for="(contribution, index) in work.contributions" :key="index">
                <li>{{ contribution }}</li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
#projects {
  background: var(--color-background-soft);
}
.projects-item {
  width: min(35rem, 100%);
  flex-grow: 1;
  display: grid;
  gap: 1rem;
  .item-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    .text {
      p {
        margin-bottom: 0.5rem;
      }
    }
  }
  .item-content {
    p {
      margin-bottom: 0.5rem;
    }
  }
}
</style>