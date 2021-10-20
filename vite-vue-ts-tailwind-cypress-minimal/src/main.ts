import { createApp } from 'vue'
import BaseTemplate from '@/pages/BaseTemplate.vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { store } from './store'
import './assets/index.postcss'

const head = createHead()

createApp(App)
   .component('BaseTemplate', BaseTemplate)
   .use(store)
   .use(router)
   .use(head)
   .mount('#app')
