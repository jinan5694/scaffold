<template>
  <el-form ref="loginForm" :model="loginForm" :rules="rules">
    <el-form-item label="Account" prop="account">
      <el-input
        v-model="loginForm.account"
        size="medium"
        placeholder="account"
      />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="loginForm.password"
        size="medium"
        type="password"
        placeholder="password"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="loginForm.checked">remember</el-checkbox>
      <el-link style="float: right;">forget password?</el-link>
    </el-form-item>
    <el-button type="primary" size="medium" class="login__btn" @click="submit">Login</el-button>
  </el-form>
</template>
<script>
import { setToken } from '@/utils/token'
export default {
  name: 'LoginForm',
  data () {
    return {
      loginForm: {
        account: null,
        password: null,
        checked: true
      }
    }
  },
  computed: {
    rules () {
      return {
        account: [{ required: true, message: 'account is required', trigger: 'blur' }],
        password: [{ required: true, message: 'password is required', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          setToken('scaffold_token_login')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login__btn {
  width: 100%;
}
.link {
  display: flex;
  justify-content: space-between;
}
</style>
