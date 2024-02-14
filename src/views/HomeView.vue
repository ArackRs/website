<script setup>
import HeroSectionHome from "@/components/home-section-hero.vue";
import ServicesSectionHome from "@/components/home-section-services.vue";
import FooterComponent from "@/components/footer-component.vue";
import ExperienceSectionAbout from '@/components/home-section-experience.vue'
import CertificatesSectionAbout from '@/components/home-section-certificates.vue'
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