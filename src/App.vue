<script setup>
import { RouterView } from 'vue-router'
import FixedRightComponent from "@/components/shared/FixedRightComponent.vue";
import FixedLeftComponent from "@/components/shared/FixedLeftComponent.vue";
import FooterComponent from '@/components/shared/FooterComponent.vue'
import SidebarComponent from '@/components/shared/SidebarComponent.vue'
import CodepenBlobBackgroundAnimation from '@/components/shared/CodepenBlobBackgroundAnimation.vue'
</script>

<template>
  <SidebarComponent />
  <div id="page">
    <FixedLeftComponent />
    <div id="container">
      <RouterView />
      <FooterComponent />
    </div>
    <FixedRightComponent />
  </div>
  <CodepenBlobBackgroundAnimation />
</template>

<style scoped>
#page {
  min-width: 100vw;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: linear-gradient(to bottom, var(--color-background-mute), var(--color-background-soft));
  background: var(--color-background-soft);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: .5rem;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-background-soft);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-background-mute);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-mute);
  }
}
#container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1580px;
  padding: 0 10%;
}
@media screen and (max-width: 450px) {
  #container {
    padding: 0 5%;
  }
}
.p-scrolltop {
  bottom: 80px;
}
</style>