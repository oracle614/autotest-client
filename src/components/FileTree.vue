<template>
  <div class="script-tree">
    <!-- <filedto class="parent-node" v-for="fileList in fileDTO" v-bind="fileList"></filedto> -->
    <!-- <el-tree :props="fileDTO" :load="loadNode" lazy show-checkbox "></el-tree> -->
  </div>
</template>

<script>
// import strToJson from '../assets/JsonUtil.js'
export default {
  data() {
    return {
      fileDTO: ''
    }
  },
  methods: {
    getScriptTree: function() {
      this.axios
        .get('/api/jmeter/getscript')
        .then(res => {
          // this.fileDTO = strToJson(res.data)
          this.fileDTO = res.data
        })
        .catch(err => {
          this.scriptTree = err
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
  margin: 10px;
}
</style>
