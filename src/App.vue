<script setup>
import { RouterView } from 'vue-router'
import TopFixed from "@/components/FixedTopComponent.vue";
import BottomFixed from "@/components/FixedBottomComponent.vue";
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <TopFixed />
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
  <BottomFixed />
  <pv-scroll-top />
</template>

<style scoped>

</style>