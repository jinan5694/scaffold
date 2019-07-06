<template>
  <div class="login">
    <div class="login__form">
      <el-button @click="login">
        {{ $t('login') }}
      </el-button>
    </div>
    <vue-particles
      color="#ff0000"
      class="particles"
    />
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
.login {
  height: 100%;
  display: flex;
  align-items: center;
}
.login__form {
  padding: 50px;
  width: 320px;
  background-color: yellow;
  position: relative;
  margin-left: 40%;
  z-index: 2;
}
.particles {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
