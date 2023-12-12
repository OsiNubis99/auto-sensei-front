import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "../src/assets/css/app.css"
import i18n from "./config/i18n";
import App from './App.vue'
import router from './router'
import utils from "./utils";
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const app = createApp(App)

app.use(Vue3Toastify, {
    autoClose: 2000,
    position: 'top-right',
    hideProgressBar: true,
    closeOnClick: true,
});
app.use(createPinia())
app.use(router)
app.use(i18n);
utils(app);
app.mount('#app')
