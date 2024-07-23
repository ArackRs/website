<script setup>

</script>

<template>
  <div class="left">
    <div class="left-container container animation-duration-1000" v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: '' }">
      <button class="brand">
        <a href="/" class="top-brand">Arack</a>
      </button>
      <nav class="nav-social">
        <a href="https://github.com/ArackRs" target="_blank">
          <i class="pi pi-github github"></i>
        </a>
        <a href="https://www.linkedin.com/in/wilver-arana-r-492a79225/" target="_blank">
          <i class="pi pi-linkedin linkedin"></i>
        </a>
        <a href="https://wa.me/51933524449?text=Hola Jack, %20%20me%20gustaría%20obtener%20más%20información%20sobre%20tus%20servicios.%20¿Podrías%20ayudarme%3F%20Gracias." target="_blank">
          <i class="pi pi-whatsapp whatsapp"></i>
        </a>
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
  z-index: 1000;
}
.left-container {
  display: flex;
  flex-direction: column;
  align-items: start;

  .brand {
    background-color: transparent;
    border: none;
    backdrop-filter: blur(10px);
    border-radius: 23px;
  }
  .top-brand {
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
        color: var(--color-primary);
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