<script setup>
import { ref } from 'vue';

const certificates = ref([
  { id: '1', title: 'Front-End Developer', url: 'meta-front-end-developer', image: 'certificate_frontend.png', date: 'Dec 16, 2023',
    skills: ['HTML', 'UI/UX design', 'JavaScript', 'CSS', 'Version Control', 'Github', 'React'], by: 'Meta' },
  { id: '2', title: 'Back-End Developer', url: 'meta-back-end-developer', image: 'certificate_frontend.png', date: 'January 26, 2024',
    skills: ['Django', 'REST APIs', 'MySQL', 'Production environments', 'Linux', 'Data Structure', 'Cloud Hosting'], by: 'Meta' },
  { id: '3', title: 'Cybersecurity Analyst', url: 'ibm-cybersecurity-analyst', image: 'certificate_cybersecurity.png', date: 'Nov 16, 2023',
    skills: ['information security analyst', 'Junior cybersecurity analyst', 'IT security analyst', 'security analyst'], by: 'IBM' }
]);
</script>

<template>
  <section id="certificates">
    <div class="certificates-container container">
      <div class="certificates-header header">
        <h1>Specialization Certificates</h1>
        <p>Issued by Coursera</p>
      </div>
      <div class="certificates-content content">
        <template v-for="certificate in certificates" :key="certificate.title">
          <div class="certificate-item bg-filter">
            <pv-image :src="'src/assets/images/' + certificate.image" alt="Image" width="300" preview />
            <div class="info">
              <a :href="'https://www.coursera.org/professional-certificates/' + certificate.url" target="_blank">
                <h1>{{ certificate.title }}</h1>
                <i class="pi pi-external-link"></i>
              </a>
              <h4>{{ certificate.date }}</h4>
              <div class="skills">Skills Obtained:
                <pv-chip v-for="item in certificate.skills" :key="item" :label="item" style="font-size: 0.7em; margin-right: 0.5rem" />
              </div>
              <pv-tag :value="'Authorized by ' + certificate.by"></pv-tag>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #certificates {
    background: var(--color-background-soft);
  }
  .certificate-item {
    flex-grow: 1;
    width: min-content;
    max-width: 24rem;
    .p-image {
      border-radius: 20px;
      width: 100%;
      object-fit: cover;
      overflow: hidden;
      background-color: white;
    }
    .info {
      a:hover {
        text-decoration: underline;
      }
      h1 {
        font-weight: 600;
        display: inline;
        padding-right: 0.5rem;
      }
      .skills {
        font-size: 0.9em;
        margin-bottom: 0.6rem;
      }
    }
  }

</style>