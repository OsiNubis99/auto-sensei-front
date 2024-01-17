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
import { useSockethStore } from "@/stores/socket";
import VueDatePicker from '@vuepic/vue-datepicker';
import VueTheMask from 'vue-the-mask'
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
app.use(VueTheMask)
utils(app);
app.mount('#app')

let token = null;
token = localStorage.getItem('token')
let store = useAuthStore()
let storeSocket = useSockethStore()
if (token) {
    store.authProfile({ token: token }).then((res) => {
        console.log("Data User", res);
        storeSocket.connectIo(res.data)
        storeSocket.socket.on("connect", (io) => {
            console.log('connect')
        });

        storeSocket.socket.on("disconnect", () => {
            console.log('disconnect')
        });
    }).catch((error) => {
        console.log("validateToken error", error);
        if (error.response.data.message == "Unauthorized" || error.response.data.statusCode == 401) {
            localStorage.clear()
        }
    });
}

