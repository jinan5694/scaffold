<template>
  <div class="logo" @click="handleClick">
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
    background-color: #fff;
    cursor: pointer;

    .bg {
      box-sizing: border-box;
      margin: 15px;
      flex: none;
      width: 30px;
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
