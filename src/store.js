import Vue from 'vue'
import Vuex from 'vuex'
import { getUsersRequests } from '../utils/requests'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLocation: null,
    total: null,
    loginSelect: []
  },
  mutations: {
    setUserLocation(state, payload) {
      state.userLocation = payload
    },

    setUserTotal(state, payload) {
      state.total = payload
    },

    setLoginSelect(state, payload) {
      state.loginSelect = payload
    }
  },
  actions: {
    getUsers({commit}) {
      getUsersRequests().then(response => {
        commit('setUserTotal', response.total)
      })
    },

    getLoginSelect({commit}) {
      return getUsersRequests().then(response => {
        const {data} = response
        commit('setLoginSelect', data) 
        return data
      })
    }
  }
})
