<script setup>
import { RouterView } from 'vue-router'
import TopFixed from "@/components/TopFixed.vue";
import BottomFixed from "@/components/BottomFixed.vue";
</script>

<template>
  <TopFixed />
  <RouterView />
  <footer>
    <p>&copy; 2023 - All rights reserved. Proudly created with Vue.js by Jack Arana</p>
  </footer>
  <BottomFixed />
</template>

<style scoped>
  footer p {
    text-align: center;
    padding: 0.5rem 0;
    background-color: var(--color-background-soft);
  }
</style>