<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import layout from './components/Layout'

export default {
  name: 'app',
  components: { layout }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
}
</style>
