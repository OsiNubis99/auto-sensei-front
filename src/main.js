import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "../src/assets/css/app.css"
import i18n from "./config/i18n";
import App from './App.vue'
import router from './router'
import utils from "./utils";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);
utils(app);
app.mount('#app')
