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
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Dropdown from 'primevue/dropdown';
import Divider from 'primevue/divider';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputIcon from 'primevue/inputicon';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';



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
app.component('pv-data-view', DataView);
app.component('pv-data-view-layout-options', DataViewLayoutOptions);
app.component('pv-dropdown', Dropdown);
app.component('pv-divider', Divider);
app.component('pv-icon-field', IconField);
app.component('pv-input-text', InputText);
app.component('pv-textarea', Textarea);
app.component('pv-input-icon', InputIcon);
app.component('pv-input-group', InputGroup);
app.component('pv-input-group-addon', InputGroupAddon);
app.component('pv-float-label', FloatLabel);
app.component('pv-input-number', InputNumber);
app.component('pv-input-mask', InputMask);

app.mount('#app')