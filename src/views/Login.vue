<template>
  <div class="login">
    <el-button @click="login">
      {{ $t('login') }}
    </el-button>
  </div>
</template>
<script>
import { setToken } from '../utils/token'
export default {
  name: 'Login',
  methods: {
    login () {
      const token = 'scaffold_token_login'
      setToken(token)
      this.$router.push(this.$route.query.redirect || '/')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
