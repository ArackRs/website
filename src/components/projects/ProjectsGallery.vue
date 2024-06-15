<script setup>
const { projects, loading } = defineProps(['projects', 'loading']);
import { useRouter } from 'vue-router';
const router = useRouter();
const selectProject = (url) => {
  router.push('my-projects/' + url);
};
</script>

<template>
  <section id="projects-section" class="projects">
    <div class="projects-container container">
      <div class="projects__header">
        <h1 class="heading">{{$t('projects.heading')}}</h1>
        <p class="description">{{$t('projects.description')}}</p>
      </div>
      <div class="projects__content content" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <template v-if="!loading" >
          <template v-for="project in projects" :key="project.id">
            <div class="item bg-filter hover:shadow-5" v-on:click="selectProject(project.name)">
              <div class="box-img">
                <img :src="project.image" alt="Image" />
              </div>
              <div class="box-txt">
                <h1>{{ project.name }}</h1>
                <p>{{ project.overview }}.</p>
              </div>
            </div>
          </template>
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
    </div>
  </section>
</template>

<style scoped>
.projects__content {
  padding-top: 5rem;
  align-items: initial;
  gap: 1rem;
  .item {
    width: 30rem;
    min-height: 20rem;
    aspect-ratio: 16 / 5;
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
</style>