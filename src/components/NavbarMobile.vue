<script setup>
import { ref } from 'vue'

const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

</script>

<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <a href="/" class="navbar-brand">Arack</a>
      <div class="navbar-menu bg-filter" :class="{ 'is-active': isActive }">
        <router-link to="/">Home</router-link>
        <router-link to="/my-projects">Projects</router-link>
        <router-link to="/about-me">About</router-link>
        <router-link to="/contact-me">Contact</router-link>
      </div>
      <button class="navbar-btn-menu" @click="toggleMenu">
        <i class="pi pi-bars"></i>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0;
  z-index: 100;
  display: none;
}
.navbar-brand {
  font-size: 1.5em;
  font-weight: bold;
  padding: 1rem 0;
  color: var(--color-text);
}
.navbar-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 0;
  right: -100%;
  background-color: var(--color-background-soft);
  width: 70%;
  height: 100vh;
  padding: 1rem 0;
  transition: all .3s ease-in-out;
  border-radius: 0;

  & a {
    font-size: 2em;
  }
  &.is-active {
    right: 0;
  }
}
.navbar-btn-menu {
  position: relative;
  z-index: 100;
  background-color: var(--color-background-soft);
  border: none;
  padding: .5rem;
  & i {
    font-size: 1.5em;
    color: var(--color-text);
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    display: block;
  }
}
</style>