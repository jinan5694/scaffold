<template>
  <div class="logo">
    <div class="bg" />
    <div v-show="!isCollapse" class="label">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { name } from '@/config'
export default {
  name: 'Logo',
  data () {
    return {
      name: name
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.app.isCollapse
    }
  }

}
</script>

<style lang="scss" scoped>
  .logo {
    height: $header-height;
    flex: 1;
    display: flex;
    background-color: $color-header-bg;

    .bg {
      box-sizing: border-box;
      margin: 8px;
      flex: none;
      width: 48px;
      background: url('../../assets/logo.png') no-repeat left center;
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
