<script setup>
import CertificateCarousel from '@/components/about/CertificateCarousel.vue'
import SkillsAccordion from '@/components/about/SkillsAccordion.vue'

const { skills, certificates, loading } = defineProps(['skills', 'certificates', 'loading']);

</script>

<template>
  <section id="summary">
    <div class="summary-container container">
      <div class="about-me bg-filter bg-image" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
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
      <div class="meta bg-image" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <template v-if="!loading">
          <img src="/src/assets/images/meta-front-end-developer-certificate.png" alt="meta">
        </template>
        <template v-else>
          <pv-skeleton width="100%" height="14rem" />
        </template>
      </div>
      <div class="ibm bg-image" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <template v-if="!loading">
          <img src="/src/assets/images/meta-front-end-developer-certificate.png" alt="ibm">
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
      <div class="certificates" v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }">
        <template v-if="!loading">
          <CertificateCarousel :value="certificates" />
        </template>
        <template v-else>
          <pv-skeleton width="100%" height="12rem" />
        </template>
      </div>
      <div class="projects bg-filter bg-image" v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }">
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
</template>



<style>
.summary-container {
  width: 100%;
  overflow: hidden;
  display: grid !important;
  place-items: center;
  gap: 2rem;
  grid-template-areas:
    "about-me about-me about-me profile profile"
    "about-me about-me about-me meta ibm"
    "education education skills skills skills"
    "certificates certificates certificates projects projects";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  div {
    width: 100%;
    height: 100%;
  }

  .about-me {
    grid-area: about-me;
    background: url('/src/assets/images/arack.jpeg');
    display: grid;
    height: 100%;
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
  .ibm {
    grid-area: ibm;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .education {
    grid-area: education;
    background: url('/src/assets/images/upc.jpeg') no-repeat center right;
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
  .summary-container {
    gap: 1rem;
  }
}
@media (max-width: 768px) {
  .summary-container {
    grid-template-areas:
      "about-me about-me about-me"
      "profile profile meta"
      "ibm education education"
      "skills skills skills"
      "certificates certificates certificates"
      "projects projects projects";
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 425px) {
  .summary-container {
    grid-template-areas:
      "about-me about-me"
      "profile profile"
      "meta ibm"
      "education education"
      "skills skills"
      "certificates certificates"
      "projects projects";
    grid-template-columns: 1fr 1fr;
  }
}
</style>