export default [
  {
    path: '/',
    icon: 'el-icon-home',
    text: '首页'
  },
  {
    path: '/system',
    icon: 'el-icon-setting',
    text: '设置',
    children: [
      {
        path: '/system/user',
        text: '用户'
      },
      {
        path: '/system/group',
        text: '组'
      },
      {
        path: '/system/role',
        text: '角色'
      },
      {
        path: '/system/auth',
        text: '权限'
      },
      {
        path: '/system/menu',
        text: '菜单'
      },
      {
        path: '/system/dictionary',
        text: '字典'
      }
    ]
  },
  {
    path: '/about',
    icon: 'el-icon-info',
    text: '关于'
  }
]
