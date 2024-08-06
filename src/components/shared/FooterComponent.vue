<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n();
const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
const openUrl = () => { window.open('https://drive.google.com/file/d/1nFgsGe9cqqZmgJQjNpkgwGUjB9zeevWT/view?usp=sharing', '_blank') };

</script>

<template>
  <footer id="footer">
    <div class="footer-container container">
      <div class="bg-filter shadow-5" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">
        <div class="start">
          <nav class="nav-social">
            <a href="https://www.linkedin.com/in/jackarana/" target="_blank"><i class="pi pi-linkedin linkedin"></i></a>
            <a href="https://wa.me/51933524449?text=Hola Jack, " target="_blank"><i class="pi pi-whatsapp whatsapp"></i></a>
            <a href="https://github.com/ArackRs" target="_blank"><i class="pi pi-github github"></i></a>
            <a href="mailto:arack.rs@gmail.com"><i class="pi pi-envelope gmail"></i></a>
          </nav>
          <div class="buttons flex gap-2">
            <pv-button class="toggle-language" icon="pi pi-language" rounded outlined text
                       @click="toggleLanguage" severity="info" />
            <pv-button class="toggle-window" icon="pi pi-download" rounded outlined text title="Download CV"
                       @click="openUrl" severity="secondary"/>
            <pv-button class="toggle-theme" :icon="isDarkTheme ? 'pi pi-sun' : 'pi pi-moon'" rounded outlined text
                       @click="toggleTheme" severity="help"/>
            <pv-button v-if="isMain" class="toggle-volume" :icon="isMuted ? 'pi-volume-up' : 'pi-volume-off'" rounded outlined text
                       @click="isMuted = !isMuted" severity="warning"/>
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
}
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--space-pg);

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
    color: limegreen;
  }
  .gmail {
    color: crimson;
  }
}
.toggle-theme {
  padding: 0;
  & i {
    font-size: 2em;
  }
}
@media (max-width: 768px) {
  .container {
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