import Vue from 'vue'

import Avatar from '../components/Avatar'
import BaseButton from '../components/Button'
import Default from '../layouts/Default.vue'
import HelloWorld from '../components/HelloWorld'
import MenuToggle from '../components/MenuToggle'
import NoSidebar from '../layouts/NoSidebar.vue'
import PledgeButton from '../components/PledgeButton'
import ProgramHeader from '../components/ProgramHeader'
import ProgramOverview from '../components/ProgramOverview'
import ProgressBar from '../components/ProgressBar'
import ProgressCard from '../components/ProgressCard'

Vue.component('no-sidebar-layout', NoSidebar)
Vue.component('default-layout', Default)

Vue.component('Avatar', Avatar)
Vue.component('BaseButton', BaseButton)
Vue.component('HelloWorld', HelloWorld)
Vue.component('MenuToggle', MenuToggle)
Vue.component('PledgeButton', PledgeButton)
Vue.component('ProgramHeader', ProgramHeader)
Vue.component('ProgramOverview', ProgramOverview)
Vue.component('ProgressBar', ProgressBar)
Vue.component('ProgressCard', ProgressCard)
