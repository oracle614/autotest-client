<template>
  <div class="script-tree">
    <div class="top">
      <el-input placeholder="Search" v-model="filterText"></el-input>
    </div>
    <div class="main"></div>
    <el-tree :data="data" :props="props" show-checkbox default-expand-all :filter-node-method="filterNode" ref="tree"></el-tree>
    <div class="bottom">
      <el-button type="infor">执行</el-button>
      <el-button type="infor">全选</el-button>
      <el-button type="infor">反选</el-button>
      <el-button type="infor">重置</el-button>
    </div>
  </div>
  <!-- <el-container>
    <el-header>
      <el-input placeholder="Search" v-model="filterText"></el-input>
    </el-header>
    <el-main>
      <el-tree :data="data" :props="props" show-checkbox default-expand-all :filter-node-method="filterNode" ref="tree"></el-tree>
    </el-main>
    <el-footer>
      <div class="buttons">
      <el-button type="infor">执行</el-button>
      <el-button type="infor">全选</el-button>
      <el-button type="infor">反选</el-button>
      <el-button type="infor">重置</el-button>
    </div>
    </el-footer>
  </el-container> -->
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
}
.top {
  position: fixed;
  top: 0;
}
.bottom {
  background-color: #333;
  position: fixed;
  bottom: 0;
}
</style>
