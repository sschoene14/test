import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import Dialog from "primevue/dialog"
import Carousel from "primevue/carousel"
import Sidebar from "primevue/sidebar"
import router from './router';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import Image from 'primevue/image';
import RadioButton from 'primevue/radiobutton';

import Paginator from 'primevue/paginator';

import ProgressSpinner from 'primevue/progressspinner';
import ToggleButton from 'primevue/togglebutton';

import TabMenu from 'primevue/tabmenu';

import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import 'primevue/resources/themes/lara-light-amber/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);
app.use(ElementPlus);
app.use(router)
app.use(ToastService);
app.use(store)

app.component('Button', Button);
app.component('ToggleButton', ToggleButton);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Paginator', Paginator);
app.component('TabMenu', TabMenu);
app.component('Image', Image);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('Sidebar', Sidebar);
app.component('Carousel', Carousel);
app.component('InputText', InputText);
app.component('AutoComplete', AutoComplete);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('Toast', Toast);



app.mount('#app')
