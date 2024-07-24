<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const isActive = ref(false);
const { locale } = useI18n();
const maximize = ref(false);

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
const isDarkTheme = ref(false);
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
const toggleMenu = () => {
  //isMain.value = (route.path === '/main' || route.path === '/contact-me');
  isActive.value = !isActive.value;
};
const onNavbar = () => {
  toggleMenu();
};
const toggleWindowMaximize = () => {
  if (!document.fullscreenElement && maximize.value === false) {
    document.documentElement.requestFullscreen();
  }
  else {
    document.exitFullscreen();
  }
  maximize.value = !maximize.value;
}
</script>

<template>
  <FixedLeftComponent/>
  <nav class="sidebar" v-if="isActive">
    <div class="sidebar-container flex flex-column justify-content-between">
      <div class="sidebar__header flex justify-content-between">
        <a href="/" class="brand">Jack Arana</a>
        <pv-button  class="btn-close" icon="pi pi-times" rounded text @click="toggleMenu"/>
      </div>
      <div class="sidebar__content">
        <div class="menu flex flex-column gap-3">
          <router-link to="/" @click="onNavbar()"><i class="pi pi-home icon"></i> Home</router-link>
          <router-link to="/about-me" @click="onNavbar()"><i class="pi pi-user icon"></i> About Me</router-link>
          <router-link to="/my-projects" @click="onNavbar()"><i class="pi pi-desktop icon"></i> Relevant Experience</router-link>
          <router-link to="/contact-me" @click="onNavbar()"><i class="pi pi-envelope icon"></i> Contact Me</router-link>
          <a href="https://drive.google.com/drive/folders/1mkUxoHVWlIwZbDJvEGP7veSEfb--WW_C" target="_blank" @click="onNavbar()"><i class="pi pi-download icon"></i> Resume CV</a>
        </div>

      </div>
      <div class="sidebar__footer flex justify-content-between gap-5">
        <nav class="nav-social flex flex-column">
          <a href="https://github.com/ArackRs" target="_blank"><i class="pi pi-github github"></i></a>
          <a href="https://www.linkedin.com/in/wilver-arana-r-492a79225/" target="_blank"><i class="pi pi-linkedin linkedin"></i></a>
          <a href="https://wa.me/51933524449?text=Hola Jack, %20%20me%20gustaría%20obtener%20más%20información%20sobre%20tus%20servicios.%20¿Podrías%20ayudarme%3F%20Gracias." target="_blank">
            <i class="pi pi-whatsapp whatsapp"></i></a>
        </nav>
        <div class="buttons">
          <pv-button class="toggle-language icon" icon="pi pi-language" rounded outlined text @click="toggleLanguage" />
          <pv-button class="toggle-theme icon" :icon="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'" rounded outlined text @click="toggleTheme"/>
          <pv-button v-if="isMain" class="toggle-volume icon" :icon="isMuted ? 'pi-volume-up' : 'pi-volume-off'" rounded outlined text @click="isMuted = !isMuted"/>
          <pv-button class="toggle-window icon" :icon="!maximize ? 'pi pi-window-maximize' : 'pi pi-github'" rounded outlined text  @click="toggleWindowMaximize"/>
        </div>
      </div>
    </div>
  </nav>
  <svg v-if="!isActive" @click="toggleMenu" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24"
       class="juice:mx-2.5 juice:text-token-text-secondary btn-sidebar">
    <path fill="currentColor" fill-rule="evenodd" d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></path>
  </svg>
</template>

<style scoped>

.sidebar {
  display: none;
  min-width: 15rem;
  height: 100vh;
  max-height: 100vh;
  z-index: 1000;
  background: var(--color-background-soft);
  margin-right: .1rem;

  .sidebar-container {
    height: 100vh;
    padding: 1rem;
    .sidebar__header {
      height: 30%;
      a.brand {
        font-size: 1.5em;
        font-weight: bold;
        padding-bottom: 5rem;
      }
    }
    .sidebar__content {
      height: 70%;
      .menu {
        & .icon {
          margin-right: 1rem;
        }
      }
    }
    .sidebar__footer {
      .nav-social {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        }
      }
      .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: var(--space-pg);
      }
    }
  }
}
.btn-sidebar {
  display: none;
  position: fixed;
  right: 1rem;
  top: 0.75rem;
  padding: .5rem;
  transform: scaleX(-1);
  z-index: 1000;
  background-color: rgba(246, 246, 246, 0.1);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
}

@media screen and (max-width: 768px) {
  .sidebar, .btn-sidebar {
    display: initial;
  }
}
</style>