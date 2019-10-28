<template>
  <div class="login">
    <div class="login__wrapper">
      <h3 class="login__title">Login2</h3>
      <LoginForm />
    </div>
  </div>
</template>
<script>
import LoginForm from '@/views/login/components/form'
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

  &__title {
    text-align: center;
    color: #999;
  }
}

</style>
