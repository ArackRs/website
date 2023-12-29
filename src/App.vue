<script setup>
import { RouterView } from 'vue-router'
import TopFixed from "@/components/TopFixed.vue";
import BottomFixed from "@/components/BottomFixed.vue";
import NavbarMobile from '@/components/NavbarMobile.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <TopFixed />
  <NavbarMobile />
  <RouterView />
  <FooterComponent />
  <BottomFixed />
</template>

<style scoped>
  footer p {
    text-align: center;
    padding: 0.5rem 0;
    background-color: var(--color-background-soft);
  }
</style>