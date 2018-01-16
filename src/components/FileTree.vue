<template>
  <div class="script-tree">
    {{scriptTree}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      scriptTree: ''
    }
  },
  methods: {
    getScriptTree: function() {
      this.axios
        .get('http://127.0.0.1:5000/api/jmeter/getscript')
        .then(res => {
          this.scriptTree = res.data
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
