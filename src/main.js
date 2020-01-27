import Vue from 'vue'
import TestApp from './TestApp.vue'

import './assets/css/main.css'
import './assets/sass/bulma.sass'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(TestApp),
}).$mount('#app')
