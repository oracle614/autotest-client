<template>
  <ul>
    <li v-for="item in items">
      <el-tooltip effect="dark" :content="item.tip" placement="right">
        <router-link :to="{ name: item.path}">
          <i class="iconfont" :class="item.name"></i>
        </router-link>
      </el-tooltip>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'siderbar',
  data() {
    return {
      items: [
        { name: 'icon-run', tip: '脚本执行', path: 'ScriptRun' },
        { name: 'icon-manager', tip: '脚本管理', path: 'ScriptManager' },
        { name: 'icon-edit', tip: '环境变量', path: 'EnvEdit' },
        { name: 'icon-report', tip: '测试报告', path: 'Report' },
        { name: 'icon-log', tip: '操作日志', path: 'Log' }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 10px 0 10px 0;
}
li {
  padding: 20px 0 20px 0;
}
.iconfont {
  font-size: 25px;
}
.router-link-active {
}
a {
  color: #d9d9d9;
  text-decoration: none;
}
</style>
