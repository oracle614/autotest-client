<template>
  <div class="script-tree">
    <el-tree :data="data" :props="props" show-checkbox></el-tree>
  </div>
</template>

<script>
import strToJson from '../assets/JsonUtil.js'
export default {
  name: 'tree',
  data() {
    return {
      data: [],
      props: {
        label: 'name',
        children: 'child'
      }
    }
  },
  methods: {
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
.parent-node {
  text-align: left;
  // font-size: 10px;
}
</style>
