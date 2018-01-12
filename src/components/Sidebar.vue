<template>
  <ul>
    <li v-for="item in items">
      <el-tooltip class="nav" effect="dark" :content="item.tip" placement="right">
        <el-button>{{item.name}}</el-button>
      </el-tooltip>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: '脚本执行', tip: '脚本执行' },
        { name: '脚本管理', tip: '脚本管理' },
        { name: '环境变量', tip: '环境变量' },
        { name: '测试报告', tip: '测试报告' },
        { name: '操作日志', tip: '操作日志' }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
