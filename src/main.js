import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins'

import './registerServiceWorker'
import './assets/styles/index.css'

Vue.config.productionTip = false
Vue.prototype.$appName = 'Rapid Prototyping Toolkit'
Vue.prototype.$appTagline = 'Rapid prototyping challenge'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
