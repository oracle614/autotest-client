<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="24">
          <div class="header-left pull-left">
            <span>Logo用svg</span>
            <span>Title用svg</span>
          </div>
          <div class="header-right pull-right">请登录</div>
        </el-col>
      </el-row>
    </el-header>

    <el-container class="body">
      <el-aside class="aside" width="200px">
        <el-row>
          <el-col :span="6">
            <sidebar></sidebar>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from './Sidebar'

export default {
  components: {
    sidebar
  }
}
</script>

<style  scoped lang="scss">
.container {
  border: 1px solid;
}
.header {
  background-color: #333;
  color: #d9d9d9;
  height: 64px;
  line-height: 64px;
}
.body {
}
.aside {
  background-color: #333;
  color: #d9d9d9;
  position: relative;
  max-width: 50px;
  flex: 0 0 200px;
  width: 200px;
}
.main {
  background: #ececec;
}
</style>
