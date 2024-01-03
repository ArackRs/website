<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

let lastScrollPosition = 0;
const isNavVisible = ref(true);

const checkScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 600) {
    return;
  }
  isNavVisible.value = currentScrollPosition < lastScrollPosition || currentScrollPosition <= 0;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <header class="top">
    <div class="top-container container">
      <a href="/" class="top-brand">Arack</a>
      <nav>
        <router-link :class="{ 'is-active': isNavVisible }" to="/">Home</router-link>
        <router-link :class="{ 'is-active': isNavVisible }" to="/about-me">About</router-link>
        <router-link :class="{ 'is-active': isNavVisible }" to="/my-projects">Projects</router-link>
        <router-link :class="{ 'is-active': isNavVisible }" to="/contact-me">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .top {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .top-container {
    display: flex;
    align-items: start;
  }

  .top-brand {
    font-size: 1.5em;
    font-weight: bold;
    padding: 1rem 0;
    color: var(--color-text);
  }

  nav {
    display: grid;
    text-align: center;
    gap: 1rem;
    padding: 1rem 0;

    a {
      text-decoration: none;
      color: var(--color-text-mute);
      opacity: 0.2;
      transform: rotate(270deg);
      padding: 0.7rem;
      margin: 1rem 0;
      transition: all .3s ease-in-out;
      .is-active {
        opacity: 1;
      }
      &:hover {
        opacity: 1;
      }
    }
  }

  nav a:hover {
    background-color: var(--color-background-soft);
    color: var(--color-text);
    transform: rotate(0deg);
  }

  nav a.router-link-exact-active {
    background-color: var(--color-background-soft);
    color: var(--color-text);
    opacity: 1;
    transform: rotate(0deg);
  }

  @media screen and (max-width: 768px) {
    .top {
      display: none;
    }
  }
</style>