<script setup>
import HeroSectionHome from "@/components/home/HeroSection.vue";
import ServicesSectionHome from "@/components/home/ServicesSection.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ExperienceSectionAbout from '@/components/home/ExperienceSection.vue'
import CertificatesSectionAbout from '@/components/home/CertificatesSection.vue'
</script>

<template>
  <main>
    <HeroSectionHome />
    <ServicesSectionHome />
    <CertificatesSectionAbout />
    <ExperienceSectionAbout />
    <FooterComponent />
  </main>
</template>

<style scoped>
</style>