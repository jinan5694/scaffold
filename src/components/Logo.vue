<template>
  <div class="logo">
    <div class="bg" />
    <div
      v-show="!isCollapse"
      class="label"
    >
      Scaffold
    </div>
  </div>
</template>

<script>

export default {
  name: 'Logo',
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '../style/vars.scss';
  .logo {
    height: $header-height;
    flex: 1;
    display: flex;

    .bg {
      box-sizing: border-box;
      margin: 8px;
      flex: none;
      width: 48px;
      background: url('../assets/logo.png') no-repeat left center;
      background-size: contain;
    }
    .label {
      flex: 1;
      line-height: $header-height;
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
  }
</style>
