// main.js -> import App           -> router-view   /          ->  import ./components/Home.vue        -> Hello World
//         -> import Router                         /sign-up       import ./components/SignUp.vue      -> register

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

createApp(App).use(router).mount('#app')
