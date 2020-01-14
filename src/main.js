import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './plugins/http'

import './registerServiceWorker'
import './assets/styles/index.css'

import '@/plugins'

import i18n from './i18n'

Vue.use({
  install (Vue) {
    Vue.prototype.$appName = 'TestApp'
    Vue.prototype.$http = http
  },
})

// Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
