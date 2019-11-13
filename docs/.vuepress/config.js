module.exports = {
  base: '/scaffold/',
  title: 'Vue Scaffold',
  description: '让生活更简单',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '更新日志', link: '/change-log' },
    ],
    sidebar: [
      '/page-a',
      ['/page-b', 'Explicit link text'],
      ['/introduction', '介绍'],
      ['/router', '路由'],
      ['/menu', '菜单'],
      ['/fea', '新特性']
    ],
    displayAllHeaders: true
  }
}