<script setup>

</script>

<template>
  <pv-carousel :value="certificates" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000">
    <template #item="certificate">
      <div class="container-carousel bg-filter">
        <div class="text ">
          <h1>{{ certificate.data.title }} Certificate</h1>
          <p>{{$t('about.main.certificatesIssued')}} {{ certificate.data.issued }}</p>
        </div>
        <pv-image :src="certificate.data.image" alt="Image" preview />
      </div>
    </template>
  </pv-carousel>
</template>

<style>
.p-carousel {
  position: relative;
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
  .p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: rgba(0, 0, 0, 0.5);
    height: 20rem;
  }

  .container-carousel {
    padding: 0;
    border-radius: 20px;
    display: flex;
    gap: 1rem;
    overflow: hidden;

    .text {
      height: min-content;
      padding: var(--space-pg);
    }
    .p-image {
      width: 50%;
      min-height: 10rem;
      max-height: 13rem;
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
    }
  }
}

</style>