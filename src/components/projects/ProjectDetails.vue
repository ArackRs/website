<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import { FirebaseService } from '@/shared/service/firebase.service.js'
import axios from 'axios'
const source = axios.CancelToken.source();
const projects = ref([]);
const project = ref({});
const lastEndpoint = ref('');
const router = useRouter();

onMounted(async () => {
  const parts = router.currentRoute.value.path.split('/');
  lastEndpoint.value = parts[parts.length - 1];

  try {
    projects.value = await FirebaseService.get('projects', source.token);
    project.value = (projects.value).find((project) => project.url === lastEndpoint.value) || null;

  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Solicitud cancelada:', error.message);
    } else {
      console.error('Error en la solicitud:', error);
    }
  }
});

const goBack = () => {
  router.push('my-projects');
};
</script>


<template>
  <section id="project">
    <div class="project-container container">
      <div class="project-header header">
        <div class="title">
          <pv-button icon="pi pi-arrow-left" rounded  aria-label="Bookmark" @click="goBack" />
          <h1>{{ project.title }}</h1>
        </div>
        <pv-button class="btn-explore" label="Explore" outlined style="font-size: 1rem;" />
      </div>
      <div class="project-content content">
        <div class="image bg-filter">
          <img src="../../assets/images/w00.jpg" alt="Image" />
        </div>
        <div class="overview bg-filter">
          <h1>Overview</h1>
          <p>{{ project.overview }}</p>
        </div>
        <div class="stack bg-filter">
          <h1>Technologies</h1>
          <pv-chip v-for="item in project.technologies" :key="item" :label="item" style="font-size: .9em;" />
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
          <p>{{ project.problem }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#project {
  min-height: 100vh;
  background-color: var(--color-background-soft);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    .p-button {
      cursor: pointer;
    }
    h1 {
      font-size: 3em;
      font-weight: bold;
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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .overview {
    grid-area: overview;
  }
  .stack {
    grid-area: stack;
    display: flex;
    flex-direction: column;
    gap: 1em;
    flex-wrap: wrap;

    h1 {
      min-width: 100%;
    }

    .p-chip {
      width: min-content;
      height: min-content;
    }
  }
  .problem {
    grid-area: problem;
  }
  .details {
    grid-area: details;
  }
}

@media (max-width: 768px) {
  .project-content {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'imagen imagen'
    'overview overview'
    'details details'
    'stack problem';
    .stack {
      flex-direction: row;
      gap: .5rem;
    }
  }
}

@media (max-width: 425px) {
  .project-content {
    grid-template-columns: 1fr;
    grid-template-areas:
    'imagen'
    'overview'
    'details'
    'stack'
    'problem';
  }
}
</style>