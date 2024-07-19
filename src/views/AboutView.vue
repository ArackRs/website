<script setup>
import MainBentoColumn from '@/components/about/MainBentoColumn.vue'
import { onMounted, ref } from 'vue'
import { FirebaseService } from '@/shared/service/firebase.service.js'
import CodepenBlobBackgroundAnimation from '@/components/CodepenBlobBackgroundAnimation.vue'

const firebaseService = FirebaseService;
const certificates = ref([])
const skills = ref([]);
const loading =ref(true);

onMounted((async () => {
  try {
    certificates.value = await firebaseService.get('certificates');
    skills.value = await firebaseService.get('skills');
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
    <CodepenBlobBackgroundAnimation />
  </main>
</template>

<style scoped>

</style>