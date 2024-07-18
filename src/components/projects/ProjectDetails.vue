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
const loading = ref(true);

onMounted(async () => {
  const parts = router.currentRoute.value.path.split('/');
  lastEndpoint.value = parts[parts.length - 1];

  try {
    projects.value = await FirebaseService.get('projects', source.token);
    project.value = (projects.value).find((project) => project.name === lastEndpoint.value) || null;

  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Solicitud cancelada:', error.message);
    } else {
      console.error('Error en la solicitud:', error);
    }
  } finally {
    loading.value = false;
  }
});

const goBack = () => { router.push('/my-projects') };
const goRepo = (url) => { window.open(url, '_blank') };
const goApi = (url) => { window.open(url, '_blank') };
const goExplore = (url) => { window.open(url, '_blank') };

</script>

<template>
  <section id="project">
    <div class="project-container container">
      <div class="project-header header">
        <div class="title">
          <pv-button class="btn-go-back" severity="secondary" icon="pi pi-arrow-left" rounded  aria-label="Arrow Left" @click="goBack()" />
          <h1>{{ project.name }}</h1>
        </div>
        <pv-button-group>
          <pv-button class="btn-explore" icon="pi pi-code" label="Repositorio" style="font-size: 1rem;" @click="goRepo(project.urlCode)" />
          <pv-button class="btn-explore" icon="pi pi-link" label="Swagger API" style="font-size: 1rem;" @click="goApi(project.urlSwagger)"  />
          <pv-button class="btn-explore" icon="pi pi-globe" label="Explore" style="font-size: 1rem;" @click="goExplore(project.urlExplore)" />
        </pv-button-group>
      </div>
      <div class="project-content content">
        <div class="image bg-filter">
          <template v-if="!loading">
            <img :src="project.image" alt="Image" />
          </template>
          <template v-else>
            <pv-skeleton width="100%" height="50rem" />
          </template>
        </div>
        <div class="overview bg-filter">
          <h1>{{ $t('projects.detail.overview')}}</h1>
          <p>{{ project.overview }}</p>
        </div>
        <div class="stack bg-filter">
          <h1>{{ $t('projects.detail.technologies')}}</h1>
          <pv-chip v-for="item in project.technologies" :key="item" :label="item" style="font-size: .9em;" />
        </div>
        <div class="details bg-filter">
          <h1>{{ $t('projects.detail.executiveSummary')}}</h1>
          <h4>Cargo: {{ project.position }} ({{ project.members }} {{ $t('projects.detail.members')}}, {{ $t('projects.detail.includingMe')}})</h4>
          <br>
          <p>{{ project.summary }}</p>
          <br>
          <p>Funciones:</p>
          <ul v-for="item in project.functions" :key="item">
            <li>{{ item }}</li>
          </ul>
        </div>
        <div class="problem bg-filter">
          <h1>{{ $t('projects.detail.projectCourse')}}</h1>
          <p>{{ project.course }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#project {
  min-height: 100vh;
  background-color: var(--color-background-soft);
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    background: transparent;
  }
  .btn-go-back {
    cursor: pointer;
    color: var(--color-text);
  }
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

@media (max-width: 525px) {
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