<template>
  <el-container class="script-run">
    <el-aside class="tree" width="400px">
      <tree></tree>
    </el-aside>
    <el-main class="log">
      <real-time-log></real-time-log>
    </el-main>
  </el-container>
</template>

<script>
import Tree from './Tree'
import RealTimeLog from './RealTimeLog'

export default {
  name: 'script-run',
  components: {
    Tree,
    RealTimeLog
  }
}
</script>

<style lang="scss" scoped>
.script-run {
  // border: 1px solid;
  height: 100%;
}
.tree {
  border: 1px solid;
  // background-color: rgb(184, 11, 11);
}
.log {
  // background-color: rgb(22, 170, 79);
}
</style>
