<script>
import { colorAsideBg } from '@/styles/vars.scss'
export default {
  data () {
    return {
      colorAsideBg: colorAsideBg
      // isCollapse: false
    }
  },
  computed: {
    active () {
      return this.$route.fullPath
    },
    isCollapse () {
      return this.$store.state.app.isCollapse
    },
    menus () {
      return this.$store.getters.menus
    }
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
        collapse={ this.isCollapse }
        defaultActive={ this.active }
        backgroundColor={ '#fff' }
        collapseTransition={false}
        router>
        { this.menus.map(item => this.getItem(item)) }
      </el-menu>
    )
  }
}
</script>

<style lang="scss" scoped>
$-font-color: #333;
.title {
  height: 100%;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  color: $-font-color;
  margin-left: 8px;
}
.icon {
  margin: 0;
  vertical-align: middle;
  width: 24px;
  text-align: center;
  color: $-font-color;
}
// /deep/ .el-submenu__title i,
// /deep/ .el-menu-item i {
//   color: $-font-color;
// }

.el-menu-item {
  &.is-active {
    .title,
    .icon {
      color: $-font-color;
    }
  }
}

</style>
