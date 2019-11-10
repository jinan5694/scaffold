<template>
  <div class="logo" @click="handleClick">
    <div class="logo__icon">
      <icon name="s-icon-code" />
    </div>
    <div v-show="!isCollapse" class="logo__text">
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
  },
  methods: {
    handleClick () {
      this.$router.push('/')
    }
  }

}
</script>

<style lang="scss" scoped>
  .logo {
    height: $header-height;
    flex: 1;
    display: flex;
    background-color: $theme-color-bg-nav;
    cursor: pointer;

    &__icon {
      box-sizing: border-box;
      flex: none;
      height: $header-height;
      width: 64px;
      color: #fff;
      font-size: 30px;
      @include flex-center;
    }
    &__text {
      flex: 1;
      line-height: $header-height;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
</style>
