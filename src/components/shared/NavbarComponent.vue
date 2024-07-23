<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import ToolbarComponent from '@/components/shared/ToolbarComponent.vue'

const route = useRoute();
const isActive = ref(false);
const { locale } = useI18n();
const maximize = ref(false);
const isMain = ref(false);

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
const isDarkTheme = ref(false);
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
const toggleMenu = () => {
  isMain.value = (route.path === '/main' || route.path === '/contact-me');
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
  <nav class="navbar">
    <div class="navbar-container container">
      <button class="navbar-btn-menu brand">
        <a href="/" class="navbar-brand">Arack</a>
      </button>
      <div class="navbar-menu bg-filter" :class="{ 'is-active': isActive }">
        <router-link to="/" @click="onNavbar()"><i class="pi pi-home icon"></i> Home</router-link>
        <router-link to="/about-me" @click="onNavbar()"><i class="pi pi-user icon"></i> About</router-link>
        <router-link to="/my-projects" @click="onNavbar()"><i class="pi pi-desktop icon"></i> Projects</router-link>
        <router-link to="/contact-me" @click="onNavbar()"><i class="pi pi-envelope icon"></i> Contact</router-link>
        <a href="https://drive.google.com/drive/folders/1mkUxoHVWlIwZbDJvEGP7veSEfb--WW_C" target="_blank" @click="onNavbar()"><i class="pi pi-download icon"></i> CV</a>
        <div class="toggles flex">
          <pv-button class="toggle-language icon" icon="pi pi-language" rounded outlined text @click="toggleLanguage" />
          <!--
          <pv-button class="toggle-theme" text rounded severity="secondary" @click="toggleTheme">
            <i :class="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'"></i>
          </pv-button>
          -->
          <pv-button v-if="isMain" class="toggle-volume" text rounded severity="secondary" @click="toggleSound">
            <span v-if="isMuted" class="material-symbols-outlined">volume_off</span>
            <i v-else class="pi pi-volume-up"></i>
          </pv-button>
          <pv-button class="toggle-window icon" :icon="!maximize ? 'pi pi-window-maximize' : 'pi pi-github'" rounded outlined text  @click="toggleWindowMaximize"/>
        </div>
      </div>
      <pv-button class="navbar-btn-menu menu" rounded @click="toggleMenu">
        <i v-if="isActive" class="pi pi-times"></i>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="juice:mx-2.5 juice:text-token-text-secondary reverse-icon">
          <path fill="currentColor" fill-rule="evenodd" d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd"></path>
        </svg>
      </pv-button>
    </div>
    <ToolbarComponent v-if="!isActive"/>
  </nav>
</template>

<style scoped>
.toggles {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;

  .toggle-window {
    span {
      color: whitesmoke;
      font-size: 1.3rem;
    }
  }
}
.reverse-icon {
  transform: scaleX(-1);
  color: whitesmoke;
  font-size: 2rem;
}
.navbar {
  position: absolute;
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  padding: 1rem 0;
  z-index: 10000;
  display: none;

  .navbar-container {

  }
}
.brand {
  border-radius: 23px;
}
.navbar-brand {
  font-size: 2em;
  font-weight: bold;
}
.navbar-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  top: 0;
  right: -100%;
  background-color: transparent;
  width: min(25rem, 60%);
  height: 100vh;
  padding: 1rem 0;
  transition: all .3s ease-in-out;
  border-radius: 0;

  & .icon {
    margin-right: 1rem;
  }
  & a {
    font-size: 1.75em;
    margin-left: 2em;
  }
  &.is-active {
    right: 0;
  }
}
.navbar-btn-menu {
  position: relative;
  right: 0;
  z-index: 100;
  background-color: transparent;
  border: none;
  padding: .5rem;
  backdrop-filter: blur(10px);

  & i {
    font-size: 1.75em;
  }
}
.menu {
  position: fixed;
  right: 1rem;
  top: 0.75rem;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    display: block;
    background-color: transparent;
  }
}
</style>