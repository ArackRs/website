<script setup>

</script>

<template>
  <header>
    <div class="container">
      <a href="/" class="logo-label">Arack</a>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/my-projects">Projects</router-link>
        <router-link to="/about-me">About</router-link>
        <router-link to="/contact-me">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  header .container {
    display: flex;
    align-items: start;
  }

  .logo-label {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
    color: white;
  }

  nav {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  nav a {
    text-decoration: none;
    color: white;
    transform: rotate(270deg);
    padding: 0.7rem;
    margin: 1rem 0;
    transition: all .3s ease-in-out;
  }

  nav a:hover {
    background-color: var(--color-background-soft);
    transform: rotate(0deg);
  }

  nav a.router-link-exact-active {
    background-color: var(--color-background-soft);
    transform: rotate(0deg);
  }
</style>