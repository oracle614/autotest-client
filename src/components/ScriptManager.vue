<template>
  <el-container class="manager">
    <el-header class="manger-header">
      <el-button>上传</el-button>
      <el-button>下载</el-button>
    </el-header>
    <el-container class="manger-main">
      <div class="manger-left">这边显示版本目录</div>
      <div class="manger-right">这边显示回归目录</div>
    </el-container>
  </el-container>
</template>


<script>
export default {
  name: 'script-manager'
}
</script>

<style lang="scss" scoped>
.manager {
  height: 100%;
}
.manger-header {
  display: flex;
  justify-content: flex-start;
  border: 1px solid #333;
}
.manger-main {
}
.manger-left {
  flex: 1;
  border: 1px solid #333;
}
.manger-right {
  flex: 1;
  border: 1px solid #333;
}
</style>
