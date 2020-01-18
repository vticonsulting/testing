import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins'

import './registerServiceWorker'
import './assets/styles/index.css'

Vue.config.productionTip = false
Vue.prototype.$appEyebrow = '@victortolbert/frontier'
// Vue.prototype.$appName = 'UI Templates, Toolkit and Utilities'
// Vue.prototype.$appName = 'UI Design System'
// Vue.prototype.$appName = 'UI Design Toolkit'
// Vue.prototype.$appName = 'UI Developer Toolkit'
Vue.prototype.$appName = 'Frontend Developer Toolkit'
// Vue.prototype.$appTagline = 'cypress, jest, json-server, storybook, tailwindcss, vue'
// Vue.prototype.$appTagline = 'cypress, jest, storybook, tailwindcss, vue'
Vue.prototype.$appTagline = 'Bulletproof UI Component Templates for Angular, React and Vue'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
