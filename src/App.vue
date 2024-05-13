<script setup>
import { RouterView } from 'vue-router'
import TopFixed from "@/components/FixedTopComponent.vue";
import BottomFixed from "@/components/FixedBottomComponent.vue";
import NavbarMobile from '@/components/NavbarComponent.vue'
import CodepenFloatingSquares from '@/components/CodepenFloatingSquares.vue'
</script>

<template>
  <TopFixed />
  <NavbarMobile />
  <RouterView />
  <BottomFixed />
  <CodepenFloatingSquares />
</template>

<style scoped>

</style>