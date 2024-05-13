<script setup>

</script>

<template>
  <section class="services">
    <div class="services-container container">
      <div class="services-header header">
        <h1>{{$t('home.services.heading')}}</h1>
        <p>{{$t('home.services.description')}}</p>
      </div>
      <div class="services-content content">
        <div class="service bg-filter">
          <i class="pi pi-desktop"></i>
          <h2>{{$t('home.services.web')}}</h2>
          <p>{{$t('home.services.webDescription')}}</p>
        </div>
        <div class="service bg-filter">
          <i class="pi pi-mobile"></i>
          <h2>{{$t('home.services.mobile')}}</h2>
          <p>{{$t('home.services.mobileDescription')}}</p>
        </div>
        <div class="service bg-filter">
          <i class="pi pi-cloud"></i>
          <h2>{{$t('home.services.cloud')}}</h2>
          <p>{{$t('home.services.cloudDescription')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .services {
    background: var(--color-background-soft);
    padding-top: 2rem;
  }

  .services-header {
    text-align: center;
    transform: translateX(0%);
    transition: all 5s;
  }
  .services.is-visible .services-header {
    text-align: center;
    transform: translateX(0%);
    opacity: 1;
    visibility: visible;
  }

  .services-content {

    & .service {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-grow: 1;
      flex-basis: 10rem;
      text-align: center;
      & i {
        font-size: 3em;
        color: var(--color-primary);
      }
      & h2 {
        font-size: 1.5em;
        color: var(--color-text);
      }
      & p {
        font-size: 1em;
        color: var(--color-text);
        text-align: center;
      }
    }
  }
</style>