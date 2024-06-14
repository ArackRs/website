<script setup>

</script>

<template>
  <div class="left">
    <div class="left-container container">
      <a href="/" class="top-brand">Arack</a>
      <nav class="nav-social">
        <a href=""><i class="pi pi-github"></i></a>
        <a href=""><i class="pi pi-linkedin"></i></a>
        <a href=""><i class="pi pi-instagram"></i></a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
  .left {
    position: fixed;
    bottom: 0;
    left: 8%;
    height: 100%;
    padding-block: var(--space-pg);
    transition: all .3s ease-in-out;
    &.is-active {
      bottom: -100%;
    }
  }
  .left-container {
    display: flex;
    flex-direction: column;
    align-items: start;

    .top-brand {
      font-size: 1.7em;
      font-weight: bold;
      color: var(--color-text);
      line-height: 1rem;
    }
    .nav-social {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--space-pg);
      a {
        text-decoration: none;
        color: var(--color-text);
        z-index: 1;
        :hover {
          color: var(--color-primary);
        }
        i {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 1440px) {
    .left {
      left: 2%;
    }
  }
  @media (max-width: 1024px) {
    .left {
      left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    .left {
      display: none;
    }
  }
</style>