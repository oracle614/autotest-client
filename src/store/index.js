import Vue from 'vue'
import Vuex from 'vuex'
import { getSocket } from '../assets/SocketIo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socketIO: null
  },
  mutations: {
    connect(state) {
      state.socketIO = getSocket()
    },
    disconnect(state) {
      state.socketIO.disconnect()
    }
  }
})
