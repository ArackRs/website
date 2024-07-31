<script setup>
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

    const serviceID = 'service_dggeuee';
    const templateID = 'template_w5rg9xd';
    const userID = 'jRlAZ0SeDZFhiW-vo';

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
  <form class="contact-form bg-filter" id="form">
    <pv-input-group>
      <pv-input-group-addon>
        <i class="pi pi-user"></i>
      </pv-input-group-addon>
      <pv-input-text type="text" maxlength="50" :placeholder="$t('contact.form.name')" id="from_name" name="from_name" required />
    </pv-input-group>
    <pv-input-group>
      <pv-input-group-addon>
        <i class="pi pi-at"></i>
      </pv-input-group-addon>
      <pv-input-text type="email" maxlength="50" :placeholder="$t('contact.form.email')" id="email_id" name="email_id" required />
    </pv-input-group>
    <pv-input-group>
      <pv-input-group-addon>
        <i class="pi pi-phone"></i>
      </pv-input-group-addon>
      <pv-input-mask mask="(+51) 999-999-999" maxlength="25" :placeholder="$t('contact.form.phone')" id="phone_id" name="phone_id" required />
    </pv-input-group>
    <pv-input-group>
      <pv-input-group-addon>
        <i class="pi pi-envelope"></i>
      </pv-input-group-addon>
      <pv-textarea maxlength="250" :placeholder="$t('contact.form.message')" id="message" name="message" variant="filled" rows="5" cols="30" required />
    </pv-input-group>
    <pv-button type="submit" class="btn-submit" id="button-email" icon="pi pi-check" :loading="loading" :label="$t('contact.form.send')" severity="secondary" ></pv-button>
  </form>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  width: 100%;
  background-color: var(--color-background-soft);

  .btn-submit {
    padding: 12px 20px;
    font-size: 16px;
  }
}
</style>