<script setup>
import ServiceCard from '@/components/home/ServiceCard.vue'
</script>

<template>
  <section id="services" class="pt-8">
    <div class="container mx-auto">
      <hgroup class="text-center px-10">
        <h1 class="text-4xl font-medium">{{$t('home.services.heading')}}</h1>
        <p>{{$t('home.services.description')}}</p>
      </hgroup>
      <div class="flex flex-wrap justify-center">
        <ServiceCard
          iconClass="pi pi-desktop text-3xl text-main"
          :title="$t('home.services.web')"
          :description="$t('home.services.webDescription')" />
        <ServiceCard
          iconClass="pi pi-mobile text-3xl text-main"
          :title="$t('home.services.mobile')"
          :description="$t('home.services.mobileDescription')" />
        <ServiceCard
          iconClass="pi pi-cloud text-3xl text-main"
          :title="$t('home.services.cloud')"
          :description="$t('home.services.cloudDescription')" />
      </div>
    </div>
  </section>
</template>