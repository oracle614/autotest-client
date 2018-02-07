<template>
  <div class="container">
    <p>{{logContent}}</p>
  </div>
</template>

<script>
import { getSocket } from '../assets/SocketIo'
export default {
  name: 'real-time-log',
  data() {
    return {
      logContent: ''
    }
  },
  methods: {},
  computed: {
    isRunning() {
      return this.$store.state.isRunning
    }
  },
  watch: {
    isRunning() {
      if (this.isRunning) {
        var socket = getSocket()
        socket.on('realtimelog', res => {
          this.logContent += res
        })
        socket.on('disconnect', () => {
          console.log('received disconnect')
          socket.disconnect()
          this.$store.commit('runCompleted')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
