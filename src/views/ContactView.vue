<script setup>
import CodepenBlobBackgroundAnimation from '@/components/CodepenBlobBackgroundAnimation.vue'
import { onMounted, ref } from 'vue';
import emailjs from 'emailjs-com';
import i18n from '@/locales/i18n.js';
import Swal from 'sweetalert2'

const loading = ref(false);

onMounted(() => {
  //const btn = document.getElementById('button-email');
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    let timerInterval;
    Swal.fire({
      title: i18n.global.t('contact.alert.titleTimerInterval'),
      html: `${i18n.global.t('contact.alert.textTimerInterval')} <b></b> ${i18n.global.t('contact.alert.textTimer')}`,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
    loading.value = true;

    event.preventDefault();

    const serviceID = 'service_8t0crmh';
    const templateID = 'template_82g14gq';
    const userID = 'Xbpyq0XFM648n7g9V';

    emailjs.sendForm(serviceID, templateID, this, userID)
      .then(() => {
        Swal.fire({
          title: i18n.global.t('contact.alert.title'),
          text: i18n.global.t('contact.alert.text'),
          icon: "success"
        });
        loading.value = false;
        form.reset();
      }, (err) => {
        alert(JSON.stringify(err));
      });
  });
});
</script>

<template>
  <section class="hero" id="hero-contact">
    <div class="hero-container container">
      <div class="contact__header">
        <h1 class="heading">{{$t('contact.heading')}}</h1>
        <ul class="flex flex-column gap-1">
          <li class="flex align-items-center gap-2" data-splitting><i class="pi pi-envelope"></i>arack.rs@gmail.com</li>
          <li class="flex align-items-center gap-2"><i class="pi pi-map-marker"></i>San Isidro, Lima - Perú</li>
        </ul>
      </div>
      <div class="contact__content">
        <form class="contact-form" id="form">
          <pv-input-group>
            <pv-input-group-addon>
              <i class="pi pi-user"></i>
            </pv-input-group-addon>
            <pv-input-text maxlength="50" :placeholder="$t('contact.form.name')" id="from_name" name="from_name" required />
          </pv-input-group>
          <pv-input-group>
            <pv-input-group-addon>
              <i class="pi pi-at"></i>
            </pv-input-group-addon>
            <pv-input-text maxlength="50" :placeholder="$t('contact.form.email')" id="email_id" name="email_id" required />
          </pv-input-group>
          <pv-input-group>
            <pv-input-group-addon>
              <i class="pi pi-phone"></i>
            </pv-input-group-addon>
            <pv-input-text maxlength="25" :placeholder="$t('contact.form.phone')" id="phone_id" name="phone_id" required />
          </pv-input-group>
          <pv-input-group>
            <pv-input-group-addon>
              <i class="pi pi-envelope"></i>
            </pv-input-group-addon>
            <pv-textarea maxlength="250" :placeholder="$t('contact.form.message')" id="message" name="message" variant="filled" rows="5" cols="30" required />
          </pv-input-group>
          <pv-button type="submit" class="btn-submit" id="button-email" icon="pi pi-check" :loading="loading" :label="$t('contact.form.send')" severity="secondary" ></pv-button>
        </form>
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

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  width: 50rem;
  background-color: var(--color-background-soft);

  .btn-submit {
    padding: 12px 20px;
    font-size: 16px;
  }
}
.heading {
  background: linear-gradient(
    to right,
    var(--color-primary) 15%,
    var(--color-primary-soft) 30%,
    var(--color-secondary) 45%,
    var(--color-secondary-soft) 60%,
    var(--color-secondary) 75%,
    var(--color-primary-soft) 90%,
    var(--color-primary) 100%
  );
  background-size: 200%;
  color: transparent;
  background-clip: text;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

@media screen and (max-width: 1440px) {
  .contact-form {
    width: 33rem;
  }
}
@media screen and (max-width: 768px) {
  .contact-form {
    width: 21rem;
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
  .contact-form {
    margin-top: 2.5rem;
    width: 18rem;

    .btn-submit {
      font-size: 13px;
    }
  }
}
@media screen and (max-width: 350px) {
  .contact-form {
    width: 15rem;
  }
}
</style>