import './assets/main.css'
import 'vue-rate/dist/vue-rate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import rate from 'vue-rate'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(rate)

app.mount('#app')
