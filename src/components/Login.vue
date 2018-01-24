<template>
  <div>
    <h1>登 录</h1>
    <!-- <form action="/" method="post" class="login-form" accept-charset="UTF-8">
      <label class="iconfont icon-username"></label>
      <input type="text" name="loginName" id="loginName" placeholder="Username">
      <label class="iconfont icon-password"></label>
      <input type="password" name="password" id="password" placeholder="Password">
      <input class="" id="submit" name="submit" type="submit" value="登 录">
    </form> -->

    <el-form ref="form" :model="form" label-width="60px" method="post" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="form.username" suffix-icon="iconfont icon-username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" suffix-icon="iconfont icon-password"></el-input>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
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
