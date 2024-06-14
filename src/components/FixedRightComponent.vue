<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
const isDarkTheme = ref(false);
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

let lastScrollPosition = 0;
const isNavVisible = ref(true);

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
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <div class="right">
    <div class="right-container container">
      <nav>
        <router-link :class="{ 'is-active': isNavVisible }" to="/">Home</router-link>
        <router-link :class="{ 'is-active': isNavVisible }" to="/about-me">About</router-link>
        <router-link :class="{ 'is-active': isNavVisible }" to="/my-projects">Projects</router-link>
        <router-link :class="{ 'is-active': isNavVisible }" to="/contact-me">Contact</router-link>
      </nav>
      <div class="toggles flex flex-column gap-2">
        <pv-button class="toggle-language icon" text rounded severity="secondary" @click="toggleLanguage"><i class="pi pi-language"></i></pv-button>
        <pv-button class="toggle-theme icon" text rounded severity="secondary" @click="toggleTheme">
          <i :class="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'"></i>
        </pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .right {
    position: fixed;
    top: 0;
    right: 8%;
    height: 100%;
    padding-block: var(--space-pg);
    z-index: 100;
  }
  .right-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
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

  @media screen and (max-width: 768px) {
    .top {
      display: none;
    }
  }
</style>