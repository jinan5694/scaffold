<template>
  <el-form ref="loginForm" :model="loginForm" :rules="rules">
    <el-form-item :label="$t('login.account')" prop="account">
      <el-input
        v-model="loginForm.account"
        size="medium"
        :placeholder="$t('login.account')"
      />
    </el-form-item>
    <el-form-item :label="$t('login.password')" prop="password">
      <el-input
        v-model="loginForm.password"
        size="medium"
        type="password"
        :placeholder="$t('login.password')"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="loginForm.checked">{{ $t('login.remember') }}</el-checkbox>
      <el-link style="float: right;">{{ $t('login.forget') }}</el-link>
    </el-form-item>
    <el-button type="primary" size="medium" class="login__btn" @click="submit">{{ $t('login.login') }}</el-button>
  </el-form>
</template>
<script>
import qs from 'qs'
// import { setToken } from '@/utils/token'
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
        account: [{ required: true, message: this.$t('login.accountRequired'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('login.passwordRequired'), trigger: 'blur' }]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login()
          // setToken('scaffold_token_login')
          // this.$router.push('/')
        }
      })
    },
    login () {
      const url = '/auth/oauth/token'
      const params = {
        username: this.loginForm.account,
        password: this.loginForm.password,
        grant_type: 'password',
        scope: 'web',
        client_id: 'web',
        client_secret: 'web'
      }
      const query = qs.stringify(params)
      this.$axios.post(url + '?' + query).then(resp => {

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
