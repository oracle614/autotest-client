<template>
  <ul class="child-node">
    <li>{{name}}</li>
    <li v-if="filetype === 'dir' && child !== undefined">
      <filedto v-for="childtree in child" v-bind="childtree"></filedto>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    name: '',
    filetype: '',
    child: ''
  }
}
</script>

<style lang="scss" scoped>
.child-node {
  list-style: none;
  margin: 10px;
}
</style>
