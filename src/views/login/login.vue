<template>
  <div class="login">
    <div class="login__wrapper">
      <h3 class="login__title">{{ $t('login.login') }}</h3>
      <LoginForm />
    </div>
  </div>
</template>
<script>
import LoginForm from '@/views/login/components/form'
export default {
  config: {
    isManuallyRegistered: true
  },
  components: {
    LoginForm
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, teal, #fff);

  background-color: #ffffff;
  background-image: url('../../assets/svg/background.svg');
  background-attachment: fixed;
  background-size: cover;

  &__wrapper {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: $box-shadow-light;
  }

  &__title {
    text-align: center;
    color: #999;
  }
}
</style>
