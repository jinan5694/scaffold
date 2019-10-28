// 路由自动注册
const autoRegisteredRoutes = []

// 以下页面不能自动注册，有路径、配置顺序和层级的特殊要求
// const ignore = [
//   './login.vue',
//   './ready.vue',
//   './home.vue',
//   './dashboard.vue',
//   './not-found.vue'
// ]

const files = require.context('../views', true, /\.vue$/)

files.keys().forEach(filePath => {
  // todo 异常处理
  const component = files(filePath).default
  const config = component.config || {}

  // 如果是需要手动注册的组件，则跳过自动注册流程
  if (config.isManuallyRegistered) return

  const routePath = getRoutePath(filePath)

  autoRegisteredRoutes.push({
    path: routePath,
    component: component,
    meta: config.meta
  })
})

/**
 * 获取用于注册路由的路径
 * @param {string} filePath
 */
function getRoutePath (filePath) {
  let routePath = filePath.replace(/(\.vue$)|(\.)/g, '')

  // 约定目录下 index 为主文件，可以通过目录名访问。例如：/foo/index.vue -> /foo
  const INDEX_KEY = '/index'
  if (routePath.endsWith(INDEX_KEY)) {
    return routePath.replace(INDEX_KEY, '')
  }

  return routePath
}

export default autoRegisteredRoutes
