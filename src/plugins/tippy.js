import Vue from 'vue'

import Tippy from 'v-tippy'
// Don't forget to include CSS somewhere!
// Basically it's a copy of `tippy.js/dist/tippy.css`
import 'v-tippy/dist/tippy.css'
Vue.use(Tippy, {
  position: 'left',
  // onShown: () => console.log('lol'),
  // ... other options you wanna change globally
})
