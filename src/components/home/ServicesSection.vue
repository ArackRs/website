<script setup>
</script>

<template>
  <section id="services" class="services">
    <div class="services-container container">
      <hgroup class="services-header header">
        <h1>{{$t('home.services.heading')}}</h1>
        <p>{{$t('home.services.description')}}</p>
      </hgroup>
      <section class="services-content content">
        <article class="service bg-filter" v-animateonscroll="{ enterClass: 'scalein', leaveClass: '' }">
          <i class="pi pi-desktop"></i>
          <h2>{{$t('home.services.web')}}</h2>
          <p>{{$t('home.services.webDescription')}}</p>
        </article>
        <article class="service bg-filter" v-animateonscroll="{ enterClass: 'scalein', leaveClass: '' }">
          <i class="pi pi-mobile"></i>
          <h2>{{$t('home.services.mobile')}}</h2>
          <p>{{$t('home.services.mobileDescription')}}</p>
        </article>
        <article class="service bg-filter" v-animateonscroll="{ enterClass: 'scalein', leaveClass: '' }">
          <i class="pi pi-cloud"></i>
          <h2>{{$t('home.services.cloud')}}</h2>
          <p>{{$t('home.services.cloudDescription')}}</p>
        </article>
      </section>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding-top: 2rem;
}

.services-header {
  padding-inline: 10%;
}

.services-content {
  & .service {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 20rem;
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