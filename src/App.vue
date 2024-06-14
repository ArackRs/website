<script setup>
import { RouterView } from 'vue-router'
import FixedRightComponent from "@/components/FixedRightComponent.vue";
import FixedLeftComponent from "@/components/FixedLeftComponent.vue";
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
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