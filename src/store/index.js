import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    schoolName: 'Page Header',
    unitType: 'Unit Type',
    user: {},
    program: {
      name: 'Program Name',
    },
    videoSource: 'https://www.youtube-nocookie.com/embed/9Yrd4aZkse8?autoplay=0',
  },
  mutations: {
    SET_USER (state, user) {
      state.User = user
    },
  },
  actions: {
    login: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        commit('LOGIN_REQUEST')
        this.$http.post('/token', payload)
          .then(response => {})
      })
    },
  },
  modules: {},
})
