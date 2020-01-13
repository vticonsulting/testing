import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    schoolName: 'Elementary School',
    unitType: 'Reading Challenge',
    participants: [
      {
        firstName: 'First',
        lastName: 'Participant',
      },
    ],
    videoSource: 'https://www.youtube-nocookie.com/embed/9Yrd4aZkse8?autoplay=0',
  },
  mutations: {},
  actions: {},
  modules: {},
})
