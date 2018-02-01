<template>
  <el-container class="script-tree">
    <el-header class="top container" height="40px">
      <el-input placeholder="脚本搜索" v-model="filterText"></el-input>
      <el-select v-model="selectValue" filterable placeholder="执行环境">
        <el-option v-for="item in envs"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
    </el-header>
    <el-main class="main">
      <el-tree :data="data"
               :props="props"
               node-key="name"
               show-checkbox
               default-expand-all
               :filter-node-method="filterNode"
               ref="tree">
      </el-tree>
    </el-main>
    <el-footer class="bottom container" height="40px">
      <el-button class="button" @click="run">执行</el-button>
      <el-button class="button" @click="setCheckeds">全选</el-button>
      <el-button class="button" @click="reverseChecked">反选</el-button>
      <el-button class="button" @click="resetChecked">重置</el-button>
    </el-footer>
  </el-container>
</template>

<script>
// import { toObj, toJson } from '../assets/JsonUtil.js'
import { toObj } from '../assets/JsonUtil.js'
import { getSocket } from '../assets/SocketIo'
export default {
  name: 'tree',
  data() {
    return {
      filterText: '',
      data: [],
      props: {
        label: 'name',
        children: 'child'
      },
      envs: [
        {
          value: 'testNewSH',
          label: 'testNewSH'
        },
        {
          value: 'testNewGZ',
          label: 'testNewGZ'
        }
      ],
      selectValue: '',
      socket: ''
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
    setCheckeds() {
      this.$refs.tree.setCheckedNodes(this.data)
    },
    reverseChecked() {
      console.log('反选')
    },
    resetChecked() {
      this.$refs.tree.setCheckedNodes([])
    },
    run() {
      var params = { env: this.selectValue, scriptList: this.getScriptList() }
      var socket = getSocket()
      this.$store.commit('runStart')
      socket.emit('sendtest', params)
    },
    getScriptTree() {
      this.axios.get('/api/jmeter/getscript').then(res => {
        this.data = toObj(res.data)
      })
    },
    getScriptList() {
      var scriptList = []
      var checkeds = this.$refs.tree.getCheckedNodes()
      for (const i in checkeds) {
        // if (checkeds[i].child == null) {
        if (!checkeds[i].child) {
          scriptList.push(checkeds[i]['name'])
        }
      }
      return scriptList
    }
  },
  mounted() {
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
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0;
}
.button {
  flex: 1;
  margin: 0;
}
</style>
