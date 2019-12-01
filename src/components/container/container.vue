<template>
  <div :class="[$style.container, {'isCollapse': isCollapse}]">
    <nav :class="$style.navbar">
      <div :class="$style.navbarLogo">
        <Logo />
      </div>
      <div :class="$style.navbarContainer">
        <Header />
      </div>
    </nav>
    <div :class="$style.mainContainer">
      <div :class="$style.main">
        <div :class="$style.sidebar">
          <el-scrollbar :class="$style.scrollbar">
            <NavMenu />
          </el-scrollbar>
        </div>
        <div :class="$style.content">
          <CustomTransition>
            <keep-alive>
              <slot />
            </keep-alive>
          </CustomTransition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './logo'
import Header from './header'
import NavMenu from '@/components/menu/index'
import CustomTransition from './transition'
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
    isCollapse () {
      return this.$store.state.app.isCollapse
    }
  }
}
</script>

<style lang="scss" module>
$color-bg: #f6f7fb;
$box-shadow: 0 0 10px rgba(0,0,0,0.2);
$sidebar-width: 240px;
$sidebar-width-collapse: 64px;

.container {
  background-color: $color-bg;
}
.navbar {
  width: 100%;
  position: fixed;
  height: $height-header;
  min-height: 50px;
  background-color: #fff;
  display: flex;
  box-shadow: $box-shadow;
  z-index: 10;
}
.navbarLogo {
  flex: none;
  width: $sidebar-width;
}
.navbarContainer {
  flex: 1;
}

.mainContainer {
  padding-top: $height-header;
}
.main {
  background-color: $color-bg;
  min-height: calc(100vh - #{$height-header});
}

.sidebar {
  position: fixed;
  width: $sidebar-width;
  height: 100%;
  background-color: $color-menu-bg;
  box-shadow: $box-shadow;
  z-index: 9;

}
.scrollbar {
  height: calc(100vh - #{$height-header});
  :global(.el-scrollbar__wrap) {
    overflow-x: hidden;
  }
}
.content {
  margin-left: $sidebar-width;
  position: relative;
  display: block;
}

:global(.isCollapse) {
  .navbarLogo, .sidebar {
    width: $sidebar-width-collapse;
  }
  .content {
    margin-left: $sidebar-width-collapse;
  }
}

</style>
