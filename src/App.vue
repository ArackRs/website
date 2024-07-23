<script setup>
import { RouterView } from 'vue-router'
import FixedRightComponent from "@/components/shared/FixedRightComponent.vue";
import FixedLeftComponent from "@/components/shared/FixedLeftComponent.vue";
import FooterComponent from '@/components/shared/FooterComponent.vue'
import NavbarComponent from '@/components/shared/SidebarComponent.vue'
</script>

<template>
  <NavbarComponent />
  <div class="body">
    <FixedLeftComponent />
    <RouterView />
    <FooterComponent />
    <FixedRightComponent />
    <pv-scroll-top />
  </div>
</template>

<style scoped>

.body {
  height: 100vh;
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
.p-scrolltop {
  bottom: 80px;
}
</style>