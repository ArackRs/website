<script setup>
import { RouterView } from 'vue-router'
import FixedRightComponent from "@/components/shared/FixedRightComponent.vue";
import FixedLeftComponent from "@/components/shared/FixedLeftComponent.vue";
import FooterComponent from '@/components/shared/FooterComponent.vue'
import NavbarComponent from '@/components/shared/NavbarComponent.vue'
</script>

<template>
  <FixedRightComponent />
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
  <FixedLeftComponent />
  <pv-scroll-top />
</template>

<style scoped>

</style>