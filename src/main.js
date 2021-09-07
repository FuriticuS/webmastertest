import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/resetstyles.scss'
import './assets/scss/styles.scss'
import './assets/scss/adaptive.scss'

createApp(App).use(store).use(router).mount('#app')
