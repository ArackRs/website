<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import { FirebaseService } from '@/services/firebase.service.js'
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
const openUrl = (url) => { window.open(url, '_blank') };

</script>

<template>
  <main>
    <article id="project">
      <div class="project-container container">
        <header class="project-header header">
          <div class="title gap-5">
            <div class="flex gap-3 align-items-center">
              <pv-button class="btn-go-back" severity="secondary" icon="pi pi-arrow-left" rounded  aria-label="Arrow Left" @click="goBack()" />
              <h1>{{ project.name }}</h1>
            </div>
            <pv-button-group>
              <pv-button class="btn-explore" icon="pi pi-code" label="Repositorio" style="font-size: 1rem;" @click="openUrl(project.urlCode)" />
            </pv-button-group>
          </div>
          <nav class="chip-container pt-3">
            <pv-button class="btn-explore" icon="pi pi-link" v-for="item in project.chips" :key="item" :label="item.label"
                       rounded :disabled="item.link === ''"
                       style="font-size: .9em; cursor: pointer;" @click="openUrl(item.link)" />
          </nav>
        </header>
        <figure class="image bg-filter">
          <template v-if="!loading">
            <img :src="project.image" alt="Image" />
          </template>
          <template v-else>
            <pv-skeleton width="100%" height="50rem" />
          </template>
        </figure>
        <section class="grid">
          <hgroup class="overview bg-filter">
            <h1>{{ $t('projects.detail.overview')}}</h1>
            <p>{{ project.overview }}</p>
          </hgroup>
          <aside class="stack bg-filter">
            <h1>{{ $t('projects.detail.technologies')}}</h1>
            <pv-chip v-for="item in project.technologies" :key="item" :label="item" style="font-size: .9em;" />
          </aside>
          <section class="details bg-filter">
            <hgroup>
              <h1>{{ $t('projects.detail.executiveSummary')}}</h1>
              <p>Cargo: {{ project.position }} ({{ project.members }}
                {{ $t('projects.detail.members')}}, {{ $t('projects.detail.includingMe')}})</p>
            </hgroup>
            <br>
            <p>{{ project.summary }}</p>
            <br>
            <p>Funciones:</p>
            <ul v-for="item in project.functions" :key="item">
              <li>{{ item }}</li>
            </ul>
          </section>
          <aside class="course bg-filter">
            <h1>{{ $t('projects.detail.projectCourse')}}</h1>
            <p>{{ project.course }}</p>
          </aside>
        </section>
      </div>
    </article>
  </main>
</template>

<style>
#project {
  min-height: 100vh;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    background: transparent;
  }
  .btn-go-back {
    cursor: pointer;
    color: var(--color-text);
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .p-button {
      cursor: pointer;
    }
    h1 {
      font-size: 3em;
      font-weight: bold;
      text-align: start;
    }
  }
  .chip-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: .5rem;
  }
}
figure {
  grid-area: imagen;
  aspect-ratio: 16 / 10;
}
.grid {
  display: grid !important;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: var(--space-pg);
  grid-template-areas:
    'imagen imagen'
    'overview stack'
    'details stack'
    'details course';

  section, aside {
    height: 100%;
    h1 {
      font-weight: 600;
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
  .course {
    grid-area: course;
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
    'stack course';
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
    'course';
  }
}
</style>