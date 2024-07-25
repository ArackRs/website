<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const route = useRoute();
const { locale } = useI18n();
const isNavVisible = ref(true);
const isDarkTheme = ref(false);
const isMain = ref(false);
const maximize = ref(false);
let lastScrollPosition = 0;
const isMuted = ref(true);

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
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
const checkScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 600) {
    return;
  }
  isNavVisible.value = currentScrollPosition < lastScrollPosition || currentScrollPosition <= 0;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  Splitting(); // Splitting.js - unique!
  if (route.path === '/main') {
    isMain.value = true;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <div class="right">
    <div class="right-container container flex align-items-center animation-duration-1000" v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: '' }">
      <nav>
        <router-link id="router" :class="{ 'is-active': isNavVisible }" to="/" data-splitting>Home</router-link>
        <router-link id="router" :class="{ 'is-active': isNavVisible }" to="/about-me" data-splitting>About</router-link>
        <router-link id="router" :class="{ 'is-active': isNavVisible }" to="/my-projects" data-splitting>Projects</router-link>
        <router-link id="router" :class="{ 'is-active': isNavVisible }" to="/contact-me" data-splitting>Contact</router-link>
        <a v-if="isMain" href="https://drive.google.com/drive/folders/1mkUxoHVWlIwZbDJvEGP7veSEfb--WW_C" target="_blank" class="download"><i class="pi pi-download icon-cv"></i> CV</a>
      </nav>
      <div class="toggles flex flex-column gap-2">
        <pv-button class="toggle-language icon" icon="pi pi-language" rounded outlined text @click="toggleLanguage" />
        <pv-button class="toggle-theme icon" :icon="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'" rounded outlined text @click="toggleTheme"/>
        <pv-button v-if="isMain" class="toggle-volume icon" :icon="isMuted ? 'pi-volume-up' : 'pi-volume-off'" rounded outlined text @click="isMuted = !isMuted"/>
        <pv-button class="toggle-window icon" :icon="!maximize ? 'pi pi-window-maximize' : 'pi pi-github'" rounded outlined text  @click="toggleWindowMaximize"/>
      </div>
    </div>
  </div>
</template>
<style>
.pi {
}
</style>

<style scoped>
.right {
  position: fixed;
  top: 0;
  right: 8%;
  height: 100%;
  padding-block: var(--space-pg);
  z-index: 1;
}
.right-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
}
.toggle-volume {
  font-size: 0.8rem;
}

i:hover {
  color: var(--color-primary-mute);
}

nav {
  display: grid;
  text-align: center;
  gap: 1rem;
  z-index: 10000;

  a {
    text-decoration: none;
    color: var(--color-text-mute);
    opacity: 0.4;
    transform: rotate(270deg);
    padding: 0.7rem;
    margin: 1rem 0;
    transition: all .3s ease-in-out;

    .is-active {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
}

nav a:hover {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  transform: rotate(0deg);
}

nav a.router-link-exact-active {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  font-weight: bold;
  opacity: 1;
  transform: rotate(0deg);
}

.toggles {
  .toggle-language:hover {
    background: dodgerblue;
  }
  .toggle-theme:hover {
    background: darkslateblue;
  }
  .toggle-window:hover {
    background: darkgrey;
  }
}

@media (max-width: 1440px) {
  .right {
    right: 2%;
  }
}
@media (max-width: 1024px) {
  .right {
    right: 0;
  }
}
@media screen and (max-width: 768px) {
  .right {
    display: none;
  }
}
</style>