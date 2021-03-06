import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import user from './modules/user'
import auth from './modules/auth'
// import dispatchActionForAllModules from '@/utils/dispatchActionForAllModules'

// import modules from './modules'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    user,
    auth,
  },
  // strict: debug,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loading: false,
    showRewards: false,
    program: {
      unitType: null,
      unitModifier: 'per',
    },
  },
  getters: {
    user (state) {
      return state.user
    },
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_SHOW_REWARDS (state, payload) {
      state.showRewards = payload
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
    async getUser ({ commit }, id) {
      commit('SET_LOADING', true)

      try {
        let response = await axios.get(`http://localhost:3000/users/4`)
        let user = response.data

        let participants = user.participants
        delete user.participants
        delete user.roles
        delete user.groups
        delete user.programs
        delete user.group_membership
        let programs = []
        participants.forEach(participant => {
          // let programId = participant.participant_info.classroom.group.program.id
          participant.participant_info.pledges.forEach(pledge => {
            pledge.amount = parseFloat(pledge.amount)
          })
          // let family_pledging_enabled = participant.participant_info.family_pledging_enabled &&
          //     participant.participant_info.classroom.group.program.program_pledge_setting.family_pledging_enabled
          // let program = programs.find(program => program.id === programId)
          // if (program === undefined || !family_pledging_enabled) {
          //   program = participant.participant_info.classroom.group.program
          //   program.participants = []
          //   programs.push(program)
          // }
          programs.push(participant)
        })

        // Sort Alphabetically
        // programs.forEach(program => {
        //   program.participants.sort((a, b) => ('' + a.first_name).localeCompare(b.first_name))
        // })
        // programs.sort((a, b) => ('' + a.name).localeCompare(b.name))

        user.programs = programs

        commit('SET_USER', user)
        commit('SET_LOADING', false)
      } catch (e) {
        // console.error(e)
      }
    },

    setUser: ({ commit }, user) => {
      // Restructure the user for the dashboard page
      let participants = user.participants
      delete user.participants
      let programs = []
      participants.forEach(participant => {
        let programId = participant.participant_info.classroom.group.program.id
        participant.participant_info.pledges.forEach(pledge => {
          pledge.amount = parseFloat(pledge.amount)
        })
        let family_pledging_enabled = participant.participant_info.family_pledging_enabled &&
              participant.participant_info.classroom.group.program.program_pledge_setting.family_pledging_enabled
        let program = programs.find(program => program.id === programId)
        if (program === undefined || !family_pledging_enabled) {
          program = participant.participant_info.classroom.group.program
          program.participants = []
          programs.push(program)
        }
        program.participants.push(participant)
      })

      // Sort Alphabetically
      programs.forEach(program => {
        program.participants.sort((a, b) => ('' + a.first_name).localeCompare(b.first_name))
      })
      programs.sort((a, b) => ('' + a.name).localeCompare(b.name))

      user.programs = programs
      commit('SET_USER', user)
    },
  },
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
// dispatchActionForAllModules('init')
