<template>
  <div class="container">
    <p>{{logContent}}</p>
    <div>
      <!-- <el-button @click="connect">connect</el-button>
      <el-button @click="disconnect">disconnect</el-button> -->
    </div>
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
  methods: {
    // connect() {
    //   this.socket = io.connect('http://127.0.0.1:5000/jmeter')
    //   this.socket.emit('my event', { data: "I'm connected!" })
    //   this.socket.on('my response', res => {
    //     console.log(res)
    //     this.logContent += res['data']
    //   })
    // },
    // disconnect() {
    //   this.socket.disconnect()
    // }
  },
  computed: {
    isRunning() {
      return this.$store.state.isRunning
    }
  },
  watch: {
    isRunning() {
      var socket = getSocket()
      socket.on('send-clinet', res => {
        console.log('send-clinet')
        this.logContent += res
      })
      socket.on('disconnect', () => {
        console.log('disconnect')
        socket.disconnect()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
