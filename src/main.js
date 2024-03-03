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

import store from './store'


import 'primevue/resources/themes/saga-green/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue);
app.use(router)
app.use(ToastService);
app.use(store)

app.component('Button', Button);
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
