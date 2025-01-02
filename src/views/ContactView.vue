<script setup>
import ContactForm from '@/components/contact/ContactForm.vue'

</script>

<template>
  <main>
    <section id="contact" class="pt-40">
      <div class="container flex flex-row flex-wrap justify-start items-initial">
        <div class="contact__header flex-grow sm:w-[30rem] min-h-full bg-filter">
          <h1 class="text-5xl md:text-7xl pb-3">{{$t('contact.heading')}}</h1>
          <ul class="flex flex-column gap-1 p-0 text-lg">
            <li class="flex align-items-center gap-2" data-splitting><i class="pi pi-envelope"></i>arack.rs@gmail.com</li>
            <li class="flex align-items-center gap-2"><i class="pi pi-map-marker"></i>San Isidro, Lima - Perú</li>
          </ul>
        </div>
        <div class="contact__content flex-grow sm:w-[30rem]">
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

.contact__header {
  background: linear-gradient(113deg, var(--color-primary), var(--color-secondary-mute));
}
</style>