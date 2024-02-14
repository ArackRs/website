<script setup>

</script>

<template>
  <div id="bottom">
    <div class="bottom-container container">
      <nav class="nav-social">
        <a href=""><i class="pi pi-github"></i></a>
        <a href=""><i class="pi pi-linkedin"></i></a>
        <a href=""><i class="pi pi-instagram"></i></a>
      </nav>
      <pv-button class="toggle-theme" text rounded severity="secondary"><i class="pi pi-sun"></i></pv-button>
    </div>
  </div>
</template>

<style>
  #bottom {
    width: 100%;
    padding: 0 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 100;
    transition: all .3s ease-in-out;
    &.is-active {
      bottom: -100%;
    }
  }
  .bottom-container {
    display: flex;
    padding: 2rem 0;
    align-items: end;
  }
  .nav-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    a {
      text-decoration: none;
      color: var(--color-text);
      :hover {
        color: var(--color-primary);
      }
      i {
        font-size: 1.5rem;
      }
    }
  }
  .toggle-theme {
    padding: 0;
    & i {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 768px) {
    #bottom {
      display: none;
    }
  }
</style>