<template>
  <div class="login">
    <div class="login__wrapper">
      <LoginForm />
    </div>
  </div>
</template>
<script>
import LoginForm from './form'
export default {
  components: {
    LoginForm
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    width: 300px;
    padding: 20px;
    background-color: #fff;
  }
}

</style>
