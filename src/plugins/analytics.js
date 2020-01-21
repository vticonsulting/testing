import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-18391724-4',
  debug: {
    enabled: false, // default value
    trace: false, // default value
    sendHitTask: true, // default value
  },
})
