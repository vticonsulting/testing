import Vue from 'vue'
import { Autocomplete, Dialog, Toast, Table } from 'buefy'

Vue.use(Toast, {
  defaultToastPosition: 'is-bottom-right',
})
Vue.use(Autocomplete)
Vue.use(Dialog)
Vue.use(Table)

// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
// Vue.use(Buefy, {})
