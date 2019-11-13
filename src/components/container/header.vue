<template>
  <div class="header">
    <div
      class="collaspse"
      @click="toggleCollaspse"
    >
      <i :class="iconName" />
    </div>
    <div class="toolbar">
      <div class="item">
        <Locale />
      </div>
      <div class="item">
        <i class="el-icon-setting" />
      </div>
      <div
        class="item"
        @click="logout"
      >
        <i class="el-icon-switch-button" />
      </div>
    </div>
  </div>
</template>

<script>
import Locale from './locale'
import API from '@/api'

export default {
  name: 'Header',
  components: {
    Locale
  },
  computed: {
    isCollapse () {
      return this.$store.state.app.isCollapse
    },
    iconName () {
      return `el-icon-${this.isCollapse ? 's-unfold' : 's-fold'}`
    }
  },
  methods: {
    toggleCollaspse () {
      this.$store.commit('app/toggleCollaspse')
    },
    async logout () {
      await this.$axios.post(API.logout)
      this.$store.commit('clear')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .collaspse {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 100%;
      font-size: 18px;
      color: #666;
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }

    .toolbar {
      height: 32px;
      display: flex;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8px;
        // text-align: center;
        // font-size: 18px;
        // color: #666;
        cursor: pointer;
        & + .item {
          margin-left: 8px;
        }
      }
    }
  }
</style>
