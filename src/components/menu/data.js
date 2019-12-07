/**
 * id 是唯一主键，
 * index - 没有children时使用path，有children时使用id
 * icon - 图标，选填
 * text - 必填
 */

export default [
  {
    id: '1',
    icon: 'el-icon-s-home',
    path: '/',
    text: '首页'
  },
  {
    id: '2',
    icon: 'el-icon-setting',
    text: '设置',
    children: [
      {
        id: '2-1',
        icon: 's-icon-location-fill',
        path: '/system/user',
        text: '用户'
      },
      {
        id: '2-2',
        path: '/system/group',
        text: '组'
      },
      {
        id: '2-3',
        path: '/system/role',
        text: '角色'
      },
      {
        id: '2-4',
        path: '/system/auth',
        text: '权限'
      },
      {
        id: '2-4',
        path: '/system/menu',
        text: '菜单'
      },
      {
        id: '2-6',
        path: '/system/dictionary',
        text: '字典'
      }
    ]
  },
  {
    id: '3',
    icon: 'el-icon-info',
    text: '关于',
    children: [
      {
        id: '3-1',
        path: '/foo/main',
        text: 'foo'
      },
      {
        id: '3-2',
        text: 'bar',
        children: [
          {
            id: '3-2-1',
            icon: 'el-icon-info',
            path: '/foo/bar',
            text: 'bar'
          },
          {
            id: '3-2-2',
            path: '/foo/biz/test',
            text: 'test'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    path: '/feedback',
    icon: 'el-icon-info',
    text: '反馈'
  }
]
