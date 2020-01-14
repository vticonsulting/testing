import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './plugins/http'

import './registerServiceWorker'
import './assets/styles/index.css'

import '@/plugins'

import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'
import Avatar from '@/components/Avatar'
import BaseButton from '@/components/Button'
import PledgeButton from '@/components/PledgeButton'
import ProgramHeader from '@/components/ProgramHeader'
import ProgressCard from '@/components/ProgressCard'
import HelloWorld from '@/components/HelloWorld'

Vue.component('default-layout', Default)
Vue.component('no-sidebar-layout', NoSidebar)

Vue.component('BaseButton', BaseButton)
Vue.component('PledgeButton', PledgeButton)
Vue.component('ProgramHeader', ProgramHeader)
Vue.component('ProgressCard', ProgressCard)
Vue.component('Avatar', Avatar)
Vue.component('HelloWorld', HelloWorld)
Vue.component('HelloWorld', HelloWorld)

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
  render: h => h(App),
}).$mount('#app')
