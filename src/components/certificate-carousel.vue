<script setup>
const certificates = [
  {
    title: 'Meta Front-End Developer Certificate',
    image: 'certificate_frontend.png'
  },
  {
    title: 'Meta Back-End Developer Certificate',
    image: 'certificate_frontend.png'
  },
  {
    title: 'Programming Languages Certificate',
    image: 'certificate_frontend.png'
  },
];
</script>

<template>
  <pv-carousel :value="certificates" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000">
    <template #item="certificate">
      <div class="container-carousel bg-filter">
        <div class="text ">
          <h1>{{ certificate.data.title }}</h1>
          <p>{{$t('about.main.certificatesIssued')}}</p>
        </div>
        <pv-image :src="'src/assets/images/' + certificate.data.image" alt="Image" preview />
      </div>
    </template>
  </pv-carousel>
</template>

<style>
.p-carousel {
  position: relative;

  .container-carousel {
    position: relative;
    overflow: hidden;
    border-radius: 20px;

    .text {
      max-width: 40%;
    }
    .p-image {
      position: absolute;
      top: 0;
      right: 0;
      max-width: 50%;
      max-height: 100%;
    }
  }
}

</style>