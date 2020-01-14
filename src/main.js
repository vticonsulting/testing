import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './plugins/http'

import './registerServiceWorker'
import './assets/styles/index.css'

import './plugins'

import i18n from './i18n'

import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'

Vue.use(VueGtag, {
  config: { id: 'UA-1234567-1' },
  appName: 'TestApp',
  pageTrackerScreenviewEnabled: true,
}, router)

Vue.component('no-sidebar-layout', NoSidebar)
Vue.component('default-layout', Default)

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
