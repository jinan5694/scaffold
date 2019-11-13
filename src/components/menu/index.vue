<script>
import menus from './data'
import {
  colorMenuBg,
  colorMenuText,
  colorMenuTextActive
} from '@/styles/vars.scss'

export default {
  data () {
    return {
      menus: menus,
      colors: {
        colorMenuBg: colorMenuBg,
        colorMenuText: colorMenuText,
        colorMenuTextActive: colorMenuTextActive
      }
    }
  },
  computed: {
    active () {
      return this.$route.fullPath
    },
    isCollapse () {
      return this.$store.state.app.isCollapse
    }
    // menus () {
    //   return this.$store.getters.menus
    // }
  },
  methods: {
    // render about
    getItem (item) {
      if (item.children && item.children.length) {
        return this.getSubMenu(item)
      }
      return this.getMenuItem(item)
    },
    getMenuItem (item) {
      return (
        <el-menu-item index={item.path}>
          {item.icon && <icon name={item.icon} />}
          {this.getTitle(item)}
        </el-menu-item>
      )
    },
    getSubMenu (item) {
      return (
        <el-submenu index={item.path}>
          <template slot="title">
            {item.icon && <icon name={item.icon} />}
            {this.getTitle(item, 'title')}
          </template>
          {
            item.children.map(item => {
              return this.getItem(item)
            })
          }
        </el-submenu>
      )
    },
    getTitle (item, slot) {
      return (
        <span class="title" slot={slot}>
          { item.text }
        </span>
      )
    }
  },
  render () {
    return (
      <el-menu
        class="menu"
        collapse={ this.isCollapse }
        defaultActive={ this.active }
        backgroundColor={ this.colors.colorMenuBg }
        textColor={ this.colors.colorMenuText }
        activeTextColor={ this.colors.colorMenuTextActive }
        collapseTransition={ false }
        router>
        { this.menus.map(item => this.getItem(item)) }
      </el-menu>
    )
  }
}
</script>

<style lang="scss" scoped>
.title {
  height: 100%;
  display: inline-block;
  font-size: 14px;
}

// override
.el-menu {
  border-right: none;
}

// color
.el-menu-item,
>>> .el-submenu__title {
  i {
    color: inherit;
  }
}

// height
.el-menu-item,
>>> .el-menu-item,
>>> .el-submenu__title,
.el-submenu .el-menu-item {
  height: $height-menu-item;
  line-height: $height-menu-item;
}

// 兼容iconfont的图标，使其样式与el-icon保持一致
%menu-icon-style {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
.el-submenu,
.el-menu-item {
  .iconfont {
    @extend %menu-icon-style;
  }
}

</style>
