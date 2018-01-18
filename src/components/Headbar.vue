<template>
  <div>
    <div class="header-left pull-left">
      <span>Logo用svg</span>
      <span>Title用svg</span>
    </div>
    <div class="header-right pull-right">
      <router-link :to="{ name: 'Login'}">请登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headbar'
}
</script>


<style lang="scss" scoped>
a {
  color: #d9d9d9;
  text-decoration: none;
}
</style>
