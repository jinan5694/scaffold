<template>
  <el-container class="container">
    <el-aside :width="asideWidth" class="container__aside">
      <Logo />
      <div class="menu">
        <NavMenu />
      </div>
    </el-aside>
    <el-container>
      <el-header class="container__header">
        <Header />
      </el-header>
      <el-main class="container__main">
        <CustomTransition>
          <keep-alive>
            <slot />
          </keep-alive>
        </CustomTransition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Logo from './logo'
import Header from './header'
import CustomTransition from './transition'
import NavMenu from '@/components/menu/index'

export default {
  name: 'Container',
  components: {
    Logo,
    Header,
    NavMenu,
    CustomTransition
  },
  computed: {
    asideWidth () {
      // 宽度不能小于200
      return `${this.isCollapse ? 64 : 210}px`
    },
    isCollapse () {
      return this.$store.state.app.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;

    &__aside {
      transition: width .2s;
    }

    &__menu {
      >>> .el-menu {
        border-right: none;
      }
    }

    &__header {
      background-color: $theme-color-primary;
      // box-shadow: 0 2px 4px -1px rgba(0,0,0,0.1);
    }

    &__main {
      overflow-x: hidden;
    }
  }
</style>
