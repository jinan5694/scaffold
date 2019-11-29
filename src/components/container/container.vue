<template>
  <el-container class="container">
    <el-aside :width="asideWidth" class="container__aside">
      <Logo class="container__logo" />
      <el-scrollbar class="nav-wrapper" wrap-style="overflow-x: hidden;">
        <NavMenu />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="container__header" :height="heightHeader">
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
import { heightHeader } from '@/styles/vars.scss'

export default {
  name: 'Container',
  components: {
    Logo,
    Header,
    NavMenu,
    CustomTransition
  },
  data () {
    return {
      heightHeader: heightHeader
    }
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
$box-shadow: 0 0 10px rgba(0,0,0,0.1);
.container {
  height: 100%;

  &__aside {
    background-color: $color-menu-bg;
    transition: width .2s;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  &__logo {
    box-shadow: $box-shadow;
    flex: none;
  }

  .nav-wrapper {
    flex: 1;
    margin: 16px 0;
    overflow-y: auto;
  }

  &__menu {
    flex: 1;
    margin-top: 16px;
  }

  &__header {
    background-color: #fff;
    box-shadow: $box-shadow;
    padding: 0 8px;
  }

  &__main {
    overflow-x: hidden;
    box-shadow: 0 0 10px inset rgba(0,0,0,0.1);
  }
}

</style>
