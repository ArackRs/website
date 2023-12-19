<script setup>

</script>

<template>
  <section class="services">
    <div class="services-container container">
      <div class="services-header header">
        <h1>What I can do for you</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>
      <div class="services-content content">
        <div class="service bg-filter">
          <i class="pi pi-desktop"></i>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div class="service bg-filter">
          <i class="pi pi-mobile"></i>
          <h2>Mobile Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div class="service bg-filter">
          <i class="pi pi-cloud"></i>
          <h2>Cloud Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .services {
    background-color: var(--color-background-soft);
  }
  .services-container {
    flex-direction: column;
    gap: 2rem;
  }
  .services-header {
    width: 100%;
    text-align: end;
  }
  .services-content {
    display: flex;
    gap: 2rem;
    & .service {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
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