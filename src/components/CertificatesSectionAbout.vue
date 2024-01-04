<script setup>
import { ref } from 'vue';

const certificates = ref([
  { title: 'Meta Front-End Developer', content: 'Tab 1 Content' },
  { title: 'Specialization Certificates', content: 'Tab 2 Content' },
  { title: 'Specialization Certificates', content: 'Tab 3 Content' }
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
        <div class="certificate-item bg-filter">
          <pv-image src="../../public/arack.jpeg" alt="Image" width="250" preview />
          <div class="info">
            <h1>Meta Front-End Developer</h1>
            <h3>Dec 2023 - Present</h3>
            <p>Skills learned: HTML, CSS and JavaScript, etc</p>
          </div>
        </div>
        <div class="certificate-item bg-filter">
          <img src="../../public/arack.jpeg" alt="">
          <div class="info">
            <h1>Meta Back-End Developer</h1>
            <h3>Dec 2023 - Present</h3>
            <p>Skills learned: HTML, CSS and JavaScript, etc</p>
          </div>
        </div>
        <div class="certificate-item bg-filter">
          <img src="../../public/arack.jpeg" alt="">
          <div class="info">
            <h1>Meta Back-End Developer</h1>
            <h3>Dec 2023 - Present</h3>
            <p>Skills learned: HTML, CSS and JavaScript, etc</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #certificates {
    background: var(--color-background-soft);
    padding-bottom: 7rem;
  }
  .certificate-item {
    width: auto;
    max-width: 24rem;
    img {
      width: 100%;
      aspect-ratio: 16 / 12;
    }
  }

</style>