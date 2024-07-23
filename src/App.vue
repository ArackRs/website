<script setup>
import { RouterView } from 'vue-router'
import FixedRightComponent from "@/components/shared/FixedRightComponent.vue";
import FixedLeftComponent from "@/components/shared/FixedLeftComponent.vue";
import FooterComponent from '@/components/shared/FooterComponent.vue'
import NavbarComponent from '@/components/shared/NavbarComponent.vue'
import ToolbarComponent from '@/components/shared/ToolbarComponent.vue'
</script>

<template>
  <FixedLeftComponent />
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
  <FixedRightComponent />
  <pv-scroll-top />
  <ToolbarComponent />
</template>

<style scoped>
.p-scrolltop {
  bottom: 80px;
}
</style>