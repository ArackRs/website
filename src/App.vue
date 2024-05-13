<script setup>
import { RouterView } from 'vue-router'
import TopFixed from "@/components/FixedTopComponent.vue";
import BottomFixed from "@/components/FixedBottomComponent.vue";
import FooterComponent from '@/components/FooterComponent.vue'
//import CodepenFloatingSquares from '@/components/CodepenFloatingSquares.vue'
</script>

<template>
  <TopFixed />
  <RouterView />
  <FooterComponent />
  <BottomFixed />
  <CodepenFloatingSquares />
</template>

<style scoped>

</style>