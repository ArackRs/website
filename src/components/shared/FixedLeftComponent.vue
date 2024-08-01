<script setup>

</script>

<template>
  <aside class="left">
    <div class="left-container animation-duration-1000" v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: '' }">
      <a href="/" class="brand">Arack</a>
      <nav class="nav-social">
        <a href="https://github.com/ArackRs" target="_blank"><i class="pi pi-github github"></i></a>
        <a href="https://www.linkedin.com/in/jackarana/" target="_blank"><i class="pi pi-linkedin linkedin"></i></a>
        <a href="https://wa.me/51933524449?text=Hola Jack, " target="_blank"><i class="pi pi-whatsapp whatsapp"></i></a>
      </nav>
    </div>
  </aside>
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
  z-index: 1000;
}
.left-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  .brand {
    font-size: 1.7em;
    font-weight: bold;
    line-height: 3rem;
    color: var(--color-text);
    animation: shine 3s linear infinite;
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

      i {
        font-size: 1.5rem;
        transition: transform 0.5s ease;
      }
      i:hover {
        transform: scale(1.5);
      }
      .linkedin:hover {
        color: dodgerblue;
      }
      .whatsapp:hover {
        color: limegreen;
      }
    }
  }
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}

@media screen and (max-width: 1440px) {
  .left {
    left: 2%;
  }
}
@media screen and (max-width: 768px) {
  .left {
    display: none;
  }
}
</style>