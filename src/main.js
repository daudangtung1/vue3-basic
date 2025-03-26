import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './stores'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import './assets/main.css';

const app = createApp(App)

app.use(router)
app.use(store).use(Vue3Toastify)
app.mount('#app')
