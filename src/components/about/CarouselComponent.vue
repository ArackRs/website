<script setup>
const { value } = defineProps(['value']);

</script>

<template>
  <pv-carousel :value="value" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000" class="bg-filter">
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
  padding: 0;

  .p-carousel-indicators {
    padding-bottom: 0;
    padding-inline: 2rem;
    justify-content: start;
    position: absolute;
    left: 0;
    bottom: 2rem;
  }
  .p-carousel-prev, .p-carousel-next {
    opacity: 0;
    display: none;
  }

  .container-carousel {
    padding: 0;
    border-radius: 20px;
    display: flex;
    gap: 1rem;
    overflow: hidden;

    .text {
      height: min-content;
      padding: 2rem;
      p {
        padding-bottom: 2rem;
      }
    }
    .p-image {
      max-width: 50%;
      height: 10rem;
    }
  }
}

@media (max-width: 425px) {
  .p-carousel {
    .p-carousel-indicators {
      bottom: 50%;
    }
    .container-carousel {
      flex-direction: column;
      .text {
        max-width: 100%;
      }
      .p-image {
      }
    }
  }
}
</style>