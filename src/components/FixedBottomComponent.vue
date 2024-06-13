<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
const isDarkTheme = ref(false);
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
</script>

<template>
  <div id="bottom">
    <div class="bottom-container container">
      <nav class="nav-social">
        <a href=""><i class="pi pi-github"></i></a>
        <a href=""><i class="pi pi-linkedin"></i></a>
        <a href=""><i class="pi pi-instagram"></i></a>
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
    gap: var(--space-pg);
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
  .toggles {
    gap: var(--space-pg);
  }

  @media screen and (max-width: 768px) {
    #bottom {
      display: none;
    }
  }
</style>