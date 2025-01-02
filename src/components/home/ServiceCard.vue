<script setup>
const { iconClass, title, description } = defineProps(['iconClass', 'title', 'description']);
</script>

<template>
  <article class="service bg-filter flex-grow flex-shrink basis-80 text-center"
           v-animateonscroll="{ enterClass: 'scalein', leaveClass: '' }">
    <i :class="iconClass"></i>
    <h2 class="text-xl py-3">{{ title }}</h2>
    <p class="text-base">{{ description }}</p>
  </article>
</template>