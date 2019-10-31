module.exports = {
  // base: '/scaffold/',
  title: 'Hello Scaffold',
  description: 'power for easy work',
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
      ['/fea', '新特性']
    ],
    displayAllHeaders: true
  }
}