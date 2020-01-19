import Vue from 'vue'
import VueGtag from 'vue-gtag'
import router from '../router'

Vue.use(VueGtag, {
  config: { id: 'UA-1234567-1' },
  appName: 'TestApp',
  pageTrackerScreenviewEnabled: true,
}, router)
