<template>
  <el-container class="container">
    <el-aside :width="asideWidth" class="aside">
      <Logo />
      <div class="menu">
        <NavMenu />
      </div>
    </el-aside>
    <el-container>
      <el-header class="top">
        <Header />
      </el-header>
      <el-main class="main">
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
    .aside {
      background-color: $color-aside-bg;
      // box-shadow: 2px 0px 4px rgba(0,0,0,0.1);
      transition: width .2s;
    }
    .menu {
      >>> .el-menu {
        border-right: none;
      }
    }
    .top {
      background-color: $color-header-bg;
      // box-shadow: 0 2px 4px -1px rgba(0,0,0,0.1);
    }
    .main {
      overflow-x: hidden;
    }
  }
</style>
