import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "../src/assets/css/app.css"
import i18n from "./config/i18n";
import App from './App.vue'
import router from './router'
import utils from "./utils";
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useAuthStore } from "@/stores/auth";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
app.use(Vue3Toastify, {
    autoClose: 2000,
    position: 'top-right',
    hideProgressBar: true,
    closeOnClick: true,
});
app.component('VueDatePicker', VueDatePicker);
app.use(createPinia())
app.use(router)
app.use(i18n);
utils(app);
app.mount('#app')
let token = null;
token = localStorage.getItem('token')
console.log('token', token)
let store = useAuthStore()
if (token) {
    store.authProfile({ token: token }).then((response) => {
        console.log("validateToken response", response);
    }).catch((error) => {
        console.log("validateToken error", error);
    });
}
