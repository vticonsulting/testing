import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import Default from './layouts/Default.vue'
import FullScreen from './layouts/FullScreen.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'
import './assets/sass/bulma.sass'
import './plugins'
import './registerServiceWorker'

Vue.component('DefaultLayout', Default)
Vue.component('FullScreenLayout', FullScreen)

Vue.config.productionTip = false
// Vue.prototype.$appEyebrow = 'tolbertdesign'
Vue.prototype.$appEyebrow = 'Booster'
Vue.prototype.$appName = 'tolbert.design/developer'
Vue.prototype.$appTagline = 'Resilient Common UI Component Patterns for Angular, React and Vue'

// Vue.prototype.$appEyebrow = '@victortolbert/frontier'
// Vue.prototype.$appEyebrow = 'Frontend Engineering'

// Vue.prototype.$appName = 'Frontend Developer Toolkit'
// Vue.prototype.$appName = 'UI Developer Toolkit'
// Vue.prototype.$appName = 'UI Style Tiles'
// Vue.prototype.$appName = 'Book Notes'
// Vue.prototype.$appName = 'Booster Digital Product Group'
// Vue.prototype.$appName = 'Tolbert Design'
// Vue.prototype.$appName = 'Design Engineering'
// Vue.prototype.$appName = 'Design Engineering'
// Vue.prototype.$appName = 'UI Templates, Toolkit and Utilities'
// Vue.prototype.$appName = 'UI Design System'
// Vue.prototype.$appName = 'UI Design Toolkit'
// Vue.prototype.$appName = 'UI Developer Toolkit'
// Vue.prototype.$appName = 'Laravel Atlanta'

// Vue.prototype.$appTagline = 'Bulletproof Common UI Component Patterns for Angular, React and Vue'
// Vue.prototype.$appTagline = 'cypress, jest, json-server, storybook, tailwindcss, vue'
// Vue.prototype.$appTagline = 'cypress, jest, storybook, tailwindcss, vue'
// Vue.prototype.$appTagline = 'Bulletproof UI Component Templates for Angular, React and Vue'
// Vue.prototype.$appTagline = 'Bulletproof Common UI Component Templates for Angular, React and Vue'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
