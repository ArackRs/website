<script setup>
import HeroSectionHome from "@/components/home/HeroSection.vue";
import ServicesSectionHome from "@/components/home/ServicesSection.vue";
import ExperienceSectionAbout from '@/components/home/ExperienceSection.vue'
import CertificatesSectionAbout from '@/components/home/CertificatesSection.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<template>
  <main>
    <NavbarComponent />
    <HeroSectionHome />
    <ServicesSectionHome />
    <CertificatesSectionAbout />
    <ExperienceSectionAbout />
  </main>
</template>

<style scoped>
</style>