<script setup>
import CodepenBlobBackgroundAnimation from '@/components/shared/CodepenBlobBackgroundAnimation.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

</script>

<template>
  <section class="hero" id="hero-contact">
    <div class="hero-container container">
      <div class="contact__header">
        <h1 class="heading text-animation">{{$t('contact.heading')}}</h1>
        <ul class="flex flex-column gap-1">
          <li class="flex align-items-center gap-2" data-splitting><i class="pi pi-envelope"></i>arack.rs@gmail.com</li>
          <li class="flex align-items-center gap-2"><i class="pi pi-map-marker"></i>San Isidro, Lima - Perú</li>
        </ul>
      </div>
      <div class="contact__content">
        <ContactForm />
      </div>
    </div>
  </section>
  <CodepenBlobBackgroundAnimation />
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .contact__header ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 16px;
      color: var(--white-mute);
    }
  }
  .contact__content {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 425px) {
  .hero-container {
    align-items: flex-start;
    text-align: left;

    .projects-header ul {
      li {
        font-size: 13px;
      }
    }
  }
}
</style>