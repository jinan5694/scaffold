<template>
  <el-form ref="loginForm" :model="loginForm" :rules="rules" @keydown.enter.native="handleEnter">
    <el-form-item :label="$t('login.account')" prop="account">
      <el-input
        ref="account"
        v-model="loginForm.account"
        size="medium"
        :placeholder="$t('login.account')"
        prefix-icon="el-icon-user"
      />
    </el-form-item>
    <el-form-item :label="$t('login.password')" prop="password">
      <el-input
        v-model="loginForm.password"
        size="medium"
        type="password"
        :placeholder="$t('login.password')"
        prefix-icon="el-icon-key"
      />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="loginForm.checked">{{ $t('login.remember') }}</el-checkbox>
      <el-link style="float: right;">{{ $t('login.forget') }}</el-link>
    </el-form-item>
    <el-button type="primary" size="medium" class="login__btn" :loading="loading" @click="submit">{{ $t('login.login') }}</el-button>
  </el-form>
</template>
<script>
import qs from 'qs'
import { setToken } from '@/utils/token'
import api from '@/api'

export default {
  name: 'LoginForm',
  data () {
    return {
      loading: false,
      loginForm: {
        account: 'system',
        password: 'system',
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
  mounted () {
    this.$refs.account.focus()
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login()
        }
      })
    },
    login () {
      this.loading = true
      const params = {
        username: this.loginForm.account,
        password: this.loginForm.password,
        grant_type: 'password',
        scope: 'web',
        client_id: 'web',
        client_secret: 'web'
      }
      const query = qs.stringify(params)
      this.$axios.post(api.login + '?' + query).then(data => {
        setToken(data.access_token)
        this.$router.push('/')
      })
    },
    handleEnter () {
      this.login()
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
