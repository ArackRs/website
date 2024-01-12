<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([]);

onMounted(async () => {
  // Utiliza fetch para obtener datos desde jsonplaceholder
  const response = await fetch('https://my-json-server.typicode.com/arack-api/website/projects');
  // Asigna los datos directamente a projects.value
  projects.value = await response.json();
});
</script>

<template>
  <section id="project" v-for="project in projects" :key="project.id">
    <div class="project-container container">
      <div class="project-header header">
        <div class="title">
          <a href="/my-projects" class="back">
            <pv-button icon="pi pi-arrow-left" rounded  aria-label="Bookmark" />
          </a>
          <h1>{{ project.title }}</h1>
        </div>
        <pv-button class="btn-explore" label="Explore" outlined />
      </div>
      <div class="project-content content">
        <div class="image bg-filter">
          <img src="../assets/images/w00.jpg" alt="Image" />
        </div>
        <div class="overview bg-filter">
          <h1>Overview</h1>

        </div>
        <div class="stack bg-filter">
          <h1>Technologies</h1>

        </div>
        <div class="details bg-filter">
          <h1>Executive Summary</h1>
          <p>Project development</p>
          <br>
          <ul>
            <li>Equipo Actual (2 integrantes, incluyéndome):</li>
            <ul>
              <li>Retomé y rediseñé la plataforma original con un nuevo enfoque y mejoras significativas.</li>
              <li>Colaboración estrecha con un nuevo compañero para redefinir la arquitectura, mejorar la interfaz de usuario y agregar características innovadoras.</li>
              <li>Integración de tecnologías modernas para optimizar el rendimiento y la escalabilidad.</li>
            </ul>
          </ul>
          <br>
          <ul>
            <li>Equipo Inicial (5 integrantes, incluyéndome):</li>
            <ul>
              <li>Desarrollo conjunto de una plataforma de gestión de contenidos basada en código abierto como parte del trabajo final del curso.</li>
              <li>Implementación de funcionalidades clave, como gestión de usuarios, administración de contenido y herramientas de colaboración.</li>
            </ul>
          </ul>
        </div>
        <div class="problem bg-filter">
          <h1>Problem Statement</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#project {
  min-height: 100vh;
  background-color: var(--color-background-soft);
  padding-bottom: 10rem;
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 3em;
      font-weight: bold;
    }
    router-link {
      cursor: pointer;
    }
  }
}
.project-content {
  display: grid !important;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    'imagen imagen'
    'overview stack'
    'details stack'
    'details problem';

  div {
    height: 100%;
    h1 {
      font-weight: 600;
    }
  }
  .image {
    grid-area: imagen;
  }
  .overview {
    grid-area: overview;
  }
  .stack {
    grid-area: stack;
  }
  .problem {
    grid-area: problem;
  }
  .details {
    grid-area: details;
  }
}
</style>