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
import VueTheMask from 'vue-the-mask'
import '@vuepic/vue-datepicker/dist/main.css'
import VueCountdown from '@chenfengyuan/vue-countdown';
import StarRating from 'vue-star-rating'
import VueLazyload from '@jambonn/vue-lazyload'
import loadimage from './assets/img/jpg/image.jpg'
import errorimage from './assets/img/jpg/error.png'
const app = createApp(App)

app.use(Vue3Toastify, {
    autoClose: 2000,
    position: 'top-right',
    hideProgressBar: true,
    closeOnClick: true,
});
app.component('VueDatePicker', VueDatePicker);
app.component(VueCountdown.name, VueCountdown);
app.component('star-rating', StarRating)
app.use(createPinia())
app.use(i18n);
app.use(VueTheMask)
app.use(VueLazyload, {
    preLoad: 1.3,
    loading: loadimage,
    attempt: 1,
    listenEvents: [ 'scroll' ]
})
utils(app);

let token = null;
token = localStorage.getItem('token')
let store = useAuthStore()
if (token) {
    store.authProfile().then((res) => {

    }).catch((error) => {
        if (error.response.data.message == "Unauthorized" || error.response.data.statusCode == 401) {
            localStorage.clear()
        }
    });
}
app.use(router)
app.mount('#app')






