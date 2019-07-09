<template>
  <el-container class="container">
    <el-aside
      :width="asideWidth"
      class="aside"
    >
      <Logo />
      <div class="menu">
        <Menu />
      </div>
    </el-aside>
    <el-container>
      <el-header class="top">
        <Header />
      </el-header>
      <el-main>
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
import Logo from './Logo'
import Header from './Header'
import Menu from './Menu'
import CustomTransition from './Transition'

export default {
  name: 'Container',
  components: {
    Logo,
    Header,
    Menu,
    CustomTransition
  },
  computed: {
    asideWidth () {
      // 宽度不能小于200
      return `${this.isCollapse ? 64 : 210}px`
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    toggleCollaspse () {
      this.$store.commit('toggleCollaspse')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    .aside {
      box-shadow: 2px 0px 4px rgba(0,0,0,0.1);
      transition: width .2s;
    }
    .top {
      box-shadow: 0 2px 4px -1px rgba(0,0,0,0.1);
    }
  }
</style>
