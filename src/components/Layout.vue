<template>
  <el-container class="container">
    <el-header class="headbar" height="64px">
      <headbar></headbar>
    </el-header>
    <el-container>
      <el-aside class="sidebar" width="200px">
        <sidebar></sidebar>
      </el-aside>
      <el-main class="body">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Headbar from './Headbar'
import Sidebar from './Sidebar'

export default {
  name: 'layout',
  components: {
    Headbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid;
  height: 100%;
}
.headbar {
  background-color: #333;
  color: #d9d9d9;
  line-height: 64px;
}
.sidebar {
  background-color: #333;
  color: #d9d9d9;
  position: relative;
  max-width: 50px;
  width: 200px;
}
.body {
  padding: 0;
  // background: #ececec;
}
</style>
