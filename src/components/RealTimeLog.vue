<template>
  <div class="container">
    <p>{{logContent}}</p>
    <el-button @click="connect">connect</el-button>
    <el-button @click="disconnect">disconnect</el-button>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'real-time-log',
  data() {
    return {
      socket: null,
      logContent: ''
    }
  },
  methods: {
    connect() {
      this.socket = io.connect('http://127.0.0.1:5000/jmeterlog')
      this.socket.emit('my event', { data: "I'm connected!" })
      this.socket.on('my response', res => {
        console.log(res)
        this.logContent += res['data']
      })
    },
    disconnect() {
      this.socket.disconnect()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
