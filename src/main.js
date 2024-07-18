import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-dark-noir/theme.css'
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales/i18n.js'
import router from './router'
import PrimeVue from "primevue/config";
import AnimateOnScroll from 'primevue/animateonscroll';
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Image from 'primevue/image';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Chip from 'primevue/chip';
import SpeedDial from 'primevue/speeddial';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import ButtonGroup from 'primevue/buttongroup'


const app = createApp(App)
app.use(i18n)
app.use(router);
app.use(PrimeVue, {
  ripple: true,
  inputStyle: "filled"
});
app.directive('animateonscroll', AnimateOnScroll);

app.component('pv-button', Button);
app.component('pv-accordion', Accordion);
app.component('pv-accordion-tab', AccordionTab);
app.component('pv-tab-view', TabView);
app.component('pv-tab-panel', TabPanel);
app.component('pv-image', Image);
app.component('pv-carousel', Carousel);
app.component('pv-tag', Tag);
app.component('pv-chip', Chip);
app.component('pv-speed-dial', SpeedDial);
app.component('pv-scroll-top', ScrollTop);
app.component('pv-skeleton', Skeleton);
app.component('pv-button-group', ButtonGroup)

app.mount('#app')