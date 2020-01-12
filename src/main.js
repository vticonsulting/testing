import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/index.css'

import '@/plugins'

import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'
import BaseButton from '@/components/Button'

Vue.component('default-layout', Default)
Vue.component('no-sidebar-layout', NoSidebar)
Vue.component('BaseButton', BaseButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
