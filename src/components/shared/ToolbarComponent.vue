<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showToolbar = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const halfScreenHeight = window.innerHeight / 4;
  showToolbar.value = scrollPosition >= halfScreenHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div v-if="showToolbar" class="toolbar">
    <div class="toolbar-container container">
      <div class="toolbar-menu flex gap-5 justify-content-between">
        <router-link to="/"><i class="pi pi-home icon"></i></router-link>
        <router-link to="/about-me"><i class="pi pi-user icon"></i></router-link>
        <router-link to="/my-projects"><i class="pi pi-desktop icon"></i></router-link>
        <router-link to="/contact-me"><i class="pi pi-envelope icon"></i></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toolbar {
  display: none;
}
@media screen and (max-width: 768px) {
  .toolbar {
    display: initial;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: black;
    z-index: 1000;
    text-align: center;
  }

  .toolbar-menu {
    width: 100%;
    height: 3.5rem;
    a {
      width: 3.5rem;
      i {
        color: white;
        font-size: 1.25rem;
      }
      span {
        margin-left: 1rem;
      }
    }
  }
}

@media (width <= 370px) {
  .toolbar-menu {
    a {
      width: 1.25rem;
    }
  }
}
@media (width <= 450px) and (width > 370px) {
  .toolbar-menu {
    a {
      width: 2rem;
    }
  }
}
</style>