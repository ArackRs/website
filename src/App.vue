<script setup>
import { RouterView } from 'vue-router'
import TopFixed from "@/components/fixed-top.vue";
import BottomFixed from "@/components/fixed-bottom.vue";
import NavbarMobile from '@/components/navbar-component.vue'
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