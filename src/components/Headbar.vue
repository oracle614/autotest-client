<template>
  <div class="container heardbar-inner">
    <div class="header-left">
      <span>Logo用svg</span>
      <span>Title用svg</span>
    </div>
    <div class="header-right">
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
.heardbar-inner{
  justify-content:space-between;
}
</style>
