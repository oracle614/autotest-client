<template>
  <div>
    <h1>登 录</h1>
    <form action="/" method="post" class="login-form" role="form" accept-charset="UTF-8">
      <label class="iconfont icon-username"></label>
      <input type="text" name="loginName" id="loginName" placeholder="Username">
      <label class="iconfont icon-password"></label>
      <input type="password" name="password" id="password" placeholder="Password">
      <input class="" id="submit" name="submit" type="submit" value="登 录">
    </form>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.login-form {
  background-color: #ffffff;
  border: 1px solid #dedede; /*边框属性 宽度 样式 颜色*/
  border-radius: 10px; /*角的形状*/
  padding: 20px 20px 20px 20px;
  margin: 0 auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27);

  input[type='text'],
  input[type='password'] {
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: 25px;
    width: 100%;
  }

  input[type='submit'] {
    width: 100%;
  }
}
</style>
