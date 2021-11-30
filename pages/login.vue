<template>
  <div>
    <h1>login</h1>
    <el-form v-model="active" label-width="100px">
      <el-form-item prop="name" label="用户名:">
        <el-input v-model="active.name" />
      </el-form-item>
      <el-form-item prop="password" label="密码:">
        <el-input v-model="active.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">
          登录
        </el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {},
  head () {
    return {
      title: ''
    }
  },
  name: 'Login'
})
export default class Login extends Vue {
  active = { name: '' }

  onLogin () {
    const { name } = this.active
    this.login(name)
  }

  login (name: string) {
    this.$store.commit('auth/setToken', name)
    const redirect = this.$route.query.redirect as string
    this.$router.replace(redirect)
  }
}
</script>
