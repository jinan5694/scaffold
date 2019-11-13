# 菜单
- 支持配置多级数据,多级图标
```js
{
  path: '/about',
  icon: 'el-icon-info',
  text: '关于',
  children: [
    {
      path: '/about/foo',
      text: 'foo'
    },
    {
      path: '/about/bar',
      text: 'bar',
      children: [
        {
          path: '/about/bar/aaa',
          icon: 'el-icon-info',
          text: 'aaa'
        },
        {
          path: '/about/bar/bbb',
          text: 'bbb'
        }
      ]
    }
  ]
}
```
- 支持修改背景色，文字颜色，选中文字颜色，行高
```scss
// src/styles/vars.scss

// menu
$color-menu-bg: #404e67; // 背景色
$color-menu-text: #dcdcdc; // 文字颜色
$color-menu-text-active: #fe8a7d; // 选中文字颜色
$height-menu-item: 48px; // 菜单项高度
```
- 整合了`el-scrollbar`，纵向滚动不会改变容器宽度
- 如果菜单文本较长，可以加大菜单宽度来避免出现横向滚动条或者显示不完整的问题。最小宽度`210px`
```js
// src/components/container/container.vue
computed: {
    asideWidth () {
      // 宽度不能小于200
      return `${this.isCollapse ? 64 : 210}px`
    }
    // other
  }
```