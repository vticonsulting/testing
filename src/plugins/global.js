import Vue from 'vue'

import BaseAvatar from '../components/Avatar'
import BaseButton from '../components/Button'
import BaseVideo from '../components/Video'

// import Icons from '../components/Icons'
import { HeartIcon } from 'vue-feather-icons'
import FacebookIcon from '../components/FacebookIcon'
import TwitterIcon from '../components/TwitterIcon'
import PinterestIcon from '../components/PinterestIcon'
import InstagramIcon from '../components/InstagramIcon'

// import LinkedinIcon from '../components/LinkedInIcon'
// import Github from '../components/GithubIcon'
// import VueIcon from '../components/VueIcon'
// import LaravelIcon from '../components/LaravelIcon'
// import TitanLogoMark from '../components/TitanLogoMark'
// import VTLogo from '../components/VTLogo'

import LaravelLogoMark from '../components/LaravelLogoMark'

import BusinessLeaderboard from '../components/BusinessLeaderboard'
import ChevronIcon from '../components/ChevronIcon'
import HelloWorld from '../components/HelloWorld'
import HowToGetPledges from '../components/HowToGetPledges'
import LabLogo from '../components/LabLogo'
import ParticipantCard from '../components/ParticipantCard'
import ParticipantCards from '../components/ParticipantCards'
import ParticipantRewards from '../components/ParticipantRewards'
import PledgeButton from '../components/PledgeButton'
import ProfileForm from '../components/ProfileForm'
import ProgramHeader from '../components/ProgramHeader'
import ProgramName from '../components/ProgramName'
import ProgramOverview from '../components/ProgramOverview'
import ProgressBar from '../components/ProgressBar'
import SchoolGoalsAndStats from '../components/SchoolGoalsAndStats'
import StudentStarVideo from '../components/StudentStarVideo'
import ThePledges from '../components/ThePledges'
import ViewRewardsButton from '../components/ViewRewardsButton'
import TitanLogo from '../components/TitanLogo'
import VueLogo from '../components/VueLogo'
import VTLogo from '../components/VTLogo'
import HelpButton from '../components/HelpButton'
import PulsingDot from '../components/PulsingDot'
import FindOrAddFruit from '../components/FindOrAddFruit'

import DemoChart from '../components/DemoChart'
import VisitorChart from '../components/VisitorChart'

import DemoTable from '../components/DemoTable'
// import PulsatingDot from '../components/PulsatingDot'

import Default from '../layouts/Default.vue'
import NoSidebar from '../layouts/NoSidebar.vue'

// #########################################################
Vue.component('BaseAvatar', BaseAvatar)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseVideo', BaseVideo)

// Vue.component('Icons', Icons)
Vue.component('HeartIcon', HeartIcon)
Vue.component('FacebookIcon', FacebookIcon)
Vue.component('TwitterIcon', TwitterIcon)
Vue.component('PinterestIcon', PinterestIcon)
Vue.component('InstagramIcon', InstagramIcon)

Vue.component('LaravelLogoMark', LaravelLogoMark)

Vue.component('BusinessLeaderboard', BusinessLeaderboard)
Vue.component('ChevronIcon', ChevronIcon)
Vue.component('HelloWorld', HelloWorld)
Vue.component('HowToGetPledges', HowToGetPledges)
Vue.component('LabLogo', LabLogo)
Vue.component('ParticipantCard', ParticipantCard)
Vue.component('ParticipantCards', ParticipantCards)
Vue.component('ParticipantRewards', ParticipantRewards)
Vue.component('PledgeButton', PledgeButton)
Vue.component('ProfileForm', ProfileForm)
Vue.component('ProgramHeader', ProgramHeader)
Vue.component('ProgramName', ProgramName)
Vue.component('ProgramOverview', ProgramOverview)
Vue.component('ProgressBar', ProgressBar)
Vue.component('SchoolGoalsAndStats', SchoolGoalsAndStats)
Vue.component('StudentStarVideo', StudentStarVideo)
Vue.component('ThePledges', ThePledges)
Vue.component('ViewRewardsButton', ViewRewardsButton)
Vue.component('TitanLogo', TitanLogo)
Vue.component('VueLogo', VueLogo)
Vue.component('VTLogo', VTLogo)
Vue.component('HelpButton', HelpButton)

// Vue.component('PulsatingDot', PulsatingDot)
Vue.component('PulsingDot', PulsingDot)
Vue.component('FindOrAddFruit', FindOrAddFruit)

Vue.component('DemoChart', DemoChart)
Vue.component('VisitorChart', VisitorChart)

Vue.component('DemoTable', DemoTable)

Vue.component('default-layout', Default)
Vue.component('no-sidebar-layout', NoSidebar)
