<script setup>
</script>

<template>
  <footer>
    <div class="container">
      <nav>
        <a href=""><i class="pi pi-github"></i></a>
        <a href=""><i class="pi pi-linkedin"></i></a>
        <a href=""><i class="pi pi-instagram"></i></a>
      </nav>
      <div class="toggle-theme"><i class="pi pi-sun"></i></div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  footer .container {
    display: flex;
    align-items: end;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }

  nav a {
    text-decoration: none;
    color: var(--color-text);
    padding: 0.7rem;
    & i {
      font-size: 1.5rem;
    }
  }

  nav a:hover {
  }

  nav a.router-link-exact-active {
    color: var(--color-primary);
  }
  .toggle-theme {
    padding: 1.5rem 0;
    & i {
      font-size: 2em;
    }
  }
</style>