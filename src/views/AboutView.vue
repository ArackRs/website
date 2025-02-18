<script setup>
import { onMounted, ref } from 'vue'
import { FirebaseService } from '@/services/firebase.service.js'
import CertificateCarousel from '@/components/about/CertificateCarousel.vue'
import SkillsAccordion from '@/components/about/SkillsAccordion.vue'

const firebaseService = FirebaseService;
const certificates = ref([])
const skills = ref([]);
const loading =ref(true);

onMounted((async () => {
  try {
    certificates.value = await firebaseService.get('certificates');
    skills.value = await firebaseService.get('skills');
  } catch (e) {
    console.error('Error en la solicitud:', e);
  } finally {
    loading.value = false;
  }
}))
</script>

<template>
  <main>
    <section id="about">
      <div class="about-container container">
        <div class="banner bg-filter bg-image" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <h1>Jack Arana Ramos</h1>
          </template>
          <template v-else>
            <pv-skeleton width="85%" height="6em" class="mt-auto" />
          </template>
        </div>
        <div class="profile bg-filter" v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <h1>{{$t('about.main.profile')}}</h1>
            <p>{{$t('about.main.profileDescription')}}</p>
          </template>
          <template v-else>
            <pv-skeleton width="20%" height="2rem" />
            <pv-skeleton width="100%" height="10rem" class="mt-2" />
          </template>
        </div>
        <div class="meta " v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <img src="../assets/images/meta-front-end-developer-certificate.png" alt="meta">
          </template>
          <template v-else>
            <pv-skeleton width="100%" height="18rem" />
          </template>
        </div>
        <div class="cv bg-filter" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <a href="https://drive.google.com/drive/folders/1guEbYlsXtJfHYw__WEWfyVLhbmPelGGB?usp=sharing" target="_blank"
              @click="onNavbar()" title="Download CV">
              <i class="pi pi-download"></i>
            </a>
          </template>
          <template v-else>
            <pv-skeleton width="100%" height="14rem" />
          </template>
        </div>
        <div class="education bg-filter bg-image" v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <h1>{{$t('about.main.education')}}</h1>
            <h2>{{$t('about.main.educationUniversity')}}</h2>
            <h3>{{$t('about.main.educationEgress')}}</h3>
            <h3>{{$t('about.main.educationCareer')}}</h3>
          </template>
          <template v-else>
            <pv-skeleton width="100%" height="2rem" />
            <pv-skeleton width="75%" height="1.5rem" class="p-mt-2" />
            <pv-skeleton width="100%" height="1.5rem" class="p-mt-2" />
          </template>
        </div>
        <div class="skills" v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <SkillsAccordion :value="skills[0]" />
          </template>
          <template v-else>
            <div class="bg-filter">
              <pv-skeleton width="100%" height="2rem" />
              <pv-skeleton width="100%" height="10rem" class="mt-2" />
            </div>
          </template>
        </div>
        <div class="certificates" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <CertificateCarousel :value="certificates" />
          </template>
          <template v-else>
            <pv-skeleton width="100%" height="12rem" />
          </template>
        </div>
        <div class="projects bg-filter bg-image" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
          <template v-if="!loading">
            <router-link to="/my-projects">
              <h1>{{$t('about.main.projects')}}<i class="pi pi-arrow-right pl-2"></i></h1>
            </router-link>
            <p>{{$t('about.main.projectsDescription')}}</p>
          </template>
          <template v-else>
            <pv-skeleton width="20%" height="2rem" />
            <pv-skeleton width="100%" height="5rem" class="mt-2" />
          </template>
        </div>
      </div>
    </section>
  </main>
</template>


<style>
#about {
  padding-top: 10rem;
}
.about-container {
  width: 100%;
  overflow: hidden;
  display: grid !important;
  place-items: center;
  gap: var(--space-pg);
  grid-template-areas:
    "banner banner banner profile profile"
    "banner banner banner meta cv"
    "education education skills skills skills"
    "certificates certificates certificates projects projects";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  div {
    width: 100%;
    height: 100%;
  }

  .banner {
    grid-area: banner;
    background-image: url('../assets/images/arack.jpeg');
    background-size: cover;
    display: grid;
    height: 100%;
    overflow: hidden;
    h1 {
      font-size: 4.5em;
      color: white;
      font-weight: bold;
      margin-top: auto;
    }
  }
  .profile {
    grid-area: profile;
  }
  .meta {
    grid-area: meta;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cv {
    grid-area: cv;
    background: linear-gradient(113deg, var(--color-primary), var(--color-secondary-mute));
    display: grid;
    place-items: center;
    i {
      font-size: 5em;
    }
  }
  .education {
    grid-area: education;
    background: url('../assets/images/upc.jpeg') no-repeat center right;
    padding-right: 5rem;
  }
  .skills {
    grid-area: skills;
  }

  .certificates {
    grid-area: certificates;
  }
  .projects {
    grid-area: projects;
    background: url('https://media.giphy.com/media/4rZA5D22301iMgrUNd/giphy.gif') no-repeat center right;
  }
  .bg-filter {

    h1 {
      padding-bottom: 1rem;
    }
  }
  .bg-image {
    background-size: cover;

    &:before {
      content: '';
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  }
}
@media (max-width: 1024px) {
  .about-container {
    gap: var(--space-pg);
  }
}
@media (max-width: 768px) {
  .about-container {
    grid-template-areas:
      "banner banner banner"
      "profile profile meta"
      "cv education education"
      "skills skills skills"
      "certificates certificates certificates"
      "projects projects projects";
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 525px) {
  .about-container {
    grid-template-areas:
      "banner banner"
      "profile profile"
      "meta cv"
      "education education"
      "skills skills"
      "certificates certificates"
      "projects projects";
    grid-template-columns: 1fr 1fr;
  }
}
</style>