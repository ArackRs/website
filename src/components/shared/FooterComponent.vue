<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
</script>

<template>
  <footer id="footer">
    <div class="footer-container container">
      <div class="bg-filter shadow-5" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <div class="start">
          <nav class="nav-social">
            <a href=""><i class="pi pi-linkedin linkedin"></i></a>
            <a href=""><i class="pi pi-instagram whatsapp"></i></a>
            <a href=""><i class="pi pi-github"></i></a>
          </nav>
          <div class="flex gap-2">
            <pv-button class="toggle-language icon" icon="pi pi-language" rounded outlined text @click="toggleLanguage" />
            <pv-button class="toggle-theme icon" :icon="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'" rounded outlined text @click="toggleTheme"/>
            <pv-button v-if="isMain" class="toggle-volume icon" :icon="isMuted ? 'pi-volume-up' : 'pi-volume-off'" rounded outlined text @click="isMuted = !isMuted"/>
            <pv-button class="toggle-window icon" :icon="!maximize ? 'pi pi-window-maximize' : 'pi pi-github'" rounded outlined text  @click="toggleWindowMaximize"/>
          </div>
        </div>
        <div class="end">
          <p>&copy; 2023 - All rights reserved.</p>
          <p>Proudly created with Vue.js by Jack Arana</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  width: 100%;
  z-index: 100;
  transition: all .3s ease-in-out;
  padding-top: var(--space-pg);
  padding-bottom: var(--space-view-py);
  background: var(--color-background-soft);
}
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--space-pg);
  max-width: 1680px;

  .start {
    width: 100%;
    padding-bottom: var(--space-pg);
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: var(--space-pg);
  }
  .end {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.nav-social {
  display: flex;
  gap: var(--space-pg) !important;
  & i {
    font-size: 2em;
  }

  .linkedin {
    color: dodgerblue;
  }
  .whatsapp {
    color: darkorchid;
  }
}
.toggle-theme {
  padding: 0;
  & i {
    font-size: 2em;
  }
}
@media (max-width: 525px) {
  .start {
    flex-direction: column;
    align-items: center;
  }
  .end {
    flex-direction: column;
  }
}
</style>