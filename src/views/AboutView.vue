<script setup>
import MainBentoColumn from '@/components/about/MainBentoColumn.vue'
import { onMounted, ref } from 'vue'
import { FirebaseService } from '@/shared/service/firebase.service.js'

const certificates = ref([])
const skills = ref([]);
const loading =ref(true);

onMounted((async () => {
  try {
    certificates.value = await FirebaseService.get('certificates');
    skills.value = await FirebaseService.get('skills');
  } catch (e) {
    console.error('Error en la solicitud:', e);
  } finally {
    loading.value = false;
  }
}))
</script>

<template>
  <main>
    <MainBentoColumn :certificates="certificates" :skills="skills" :loading="loading" />
  </main>
</template>

<style scoped>

</style>