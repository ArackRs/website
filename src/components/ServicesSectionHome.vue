<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// eslint-disable-next-line no-unused-vars
let lastScrollPosition = 0;
const isFooter = ref(false);

const handleScroll = () => {

  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // Adjust the condition to check if the user has reached the bottom
  isFooter.value = currentScrollPosition + windowHeight >= documentHeight;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check visibility on mount
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="services" :class="{ 'is-visible': isFooter }">
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
    background: var(--color-background-soft);
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