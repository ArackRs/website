<script setup>
import ContactForm from '@/components/contact/ContactForm.vue'

</script>

<template>
  <main>
    <section id="contact">
      <div class="contact-container container">
        <div class="contact__header bg-filter">
          <h1>{{$t('contact.heading')}}</h1>
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
  </main>
</template>

<style scoped>
#contact {
  padding-top: 10rem;
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: initial;
  gap: 2rem;
  overflow: hidden;

  .contact__header {
    flex-grow: 1;
    width: min(30rem, 100%);
    min-height: 100%;
    background: linear-gradient(113deg, var(--color-primary), var(--color-secondary-mute));

    h1 {
      font-size: 4.5em;
      color: white;
      font-weight: bold;
      margin-top: auto;
    }
    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 16px;
        color: var(--white-mute);
      }
    }
  }
  .contact__content {
    flex-grow: 1;
    width: min(30rem, 100%);
  }
}

@media screen and (max-width: 425px) {
  .contact-container {
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