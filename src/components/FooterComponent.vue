<script setup>
</script>

<template>
  <footer id="footer">
    <div class="footer-container container">
      <div class="start">
        <nav class="nav-social">
          <a href=""><i class="pi pi-github"></i></a>
          <a href=""><i class="pi pi-linkedin"></i></a>
          <a href=""><i class="pi pi-instagram"></i></a>
        </nav>
        <pv-button class="toggle-theme" text rounded severity="secondary"><i class="pi pi-sun"></i></pv-button>
      </div>
      <div class="end">
        <p>&copy; 2023 - All rights reserved.</p>
        <p>Proudly created with Vue.js by Jack Arana</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  #footer {
    width: 100%;
    z-index: 100;
    background: var(--color-primary);
    transition: all .3s ease-in-out;
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: start;

    .start {
      width: 100%;
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 2rem;
    }
    .end {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 1rem;
    }
  }
  .nav-social {
    flex-direction: row;
  }
</style>