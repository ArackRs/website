import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-dark-cyan/theme.css'
import 'primeicons/primeicons.css';
import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import Button from 'primevue/button';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.component('pv-button', Button);

app.mount('#app')
