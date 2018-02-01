import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRunning: false
  },
  mutations: {
    runStart(state) {
      state.isRunning = true
    },
    runCompleted(state) {
      state.isRunning = false
    }
  }
})
