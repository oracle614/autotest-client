<template>
  <div class="container login-module">
    <el-form class="login-form" :model="form" label-width="60px" method="post" ref="form">
      <h1>登 录</h1>
      <el-form-item label="用户名">
        <el-input v-model="form.username" suffix-icon="iconfont icon-username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" suffix-icon="iconfont icon-password"></el-input>
      </el-form-item>
      <el-button native-type="submit">登 录</el-button>
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
.login-module {
  align-items: center;
}
.login-form {
  background-color: #fff;
  border: 1px solid #dedede; /*边框属性 宽度 样式 颜色*/
  border-radius: 10px; /*角的形状*/
  padding: 20px 20px 20px 20px;
  margin: 0 auto;
}
</style>
