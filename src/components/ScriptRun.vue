<template>
  <el-container class="script-run">
    <el-aside class="tree" width="400px">
      <filetree></filetree>
    </el-aside>
    <el-main class="log">这里是实时log</el-main>
  </el-container>
</template>

<script>
import filetree from './FileTree'

export default {
  components: {
    filetree
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
