import Vue from 'vue'
import Vuex from 'vuex'
import { getUsersRequests } from '../utils/requests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLocation: null,
    total: null,
  },
  mutations: {
    setUserLocation(state, payload) {
      state.userLocation = payload
    },

    setUserTotal(state, payload) {
      state.total = payload
      console.log('state.total', state.total)
    }
  },
  actions: {
    getUsers({commit}) {
      getUsersRequests().then(response => {
        commit('setUserTotal', response.total)
      })
    }
  }
})
