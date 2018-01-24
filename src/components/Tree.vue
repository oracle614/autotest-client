<template>
  <el-container class="script-tree">
    <el-header class="top" height="40px">
      <el-input placeholder="Search" v-model="filterText"></el-input>
    </el-header>
    <el-main class="main">
      <el-tree :data="data" :props="props" show-checkbox default-expand-all :filter-node-method="filterNode" ref="tree"></el-tree>
    </el-main>
    <el-footer class="bottom" height="40px">
      <el-button class="button">执行</el-button>
      <el-button class="button">全选</el-button>
      <el-button class="button">反选</el-button>
      <el-button class="button">重置</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import strToJson from '../assets/JsonUtil.js'
export default {
  name: 'tree',
  data() {
    return {
      filterText: '',
      data: [],
      props: {
        label: 'name',
        children: 'child'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    getScriptTree: function() {
      this.axios
        .get('/api/jmeter/getscript')
        .then(res => {
          console.log(res.data)
          console.log(typeof strToJson(res.data))
          this.data = strToJson(res.data)
        })
        .catch(err => {
          this.data = err
        })
    }
  },
  mounted: function() {
    this.getScriptTree()
  }
}
</script>

<style lang="scss" scoped>
.script-tree {
  height: 100%;
}
.top {
  height: 100%;
  padding: 0;
}
.main {
  height: 100%;
  padding: 0;
}
.bottom {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0;
}
.button {
  flex: 1;
  margin: 0;
}
</style>
