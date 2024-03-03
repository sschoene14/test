/* eslint-disable */
import { createStore } from "vuex";
import * as DataHandler from '../handlers/DataHandler'

export default createStore({
  state: {
    whoami: null,
  },
  mutations: {
    setWhoami(state, value) {
      state.whoami = value
    },
  },
  actions: {
    async fetchCompanies({ commit }, val) {
      try {
        const response = await DataHandler.fetchCompanies(val)
        if(response != undefined) {
          commit('setWhoami', response)
        }
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async fetchGreeting({ commit }, val) {
      try {
        const response = await DataHandler.fetchGreeting(val)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async registerUser({ commit }, val) {
      try {
        const response = await DataHandler.registerUser(val)
        return response
      } catch (err) {
        console.log(err)
      }
    }
}
});