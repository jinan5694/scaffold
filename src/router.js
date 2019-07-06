import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import { getToken } from './utils/token'
import store from './store'

Vue.use(Router)

// 自动生成router
const routes = []
const files = require.context('./views', true, /\.vue$/)
// 一下页面不能自动注册，
// 这些路由有路径、配置顺序和层级的特殊要求
const ignore = [
  './Login.vue',
  './Ready.vue',
  './Home.vue',
  './Dashboard.vue',
  './NotFound.vue'
]
files.keys().forEach(key => {
  console.log(key)
  // key is './foo/bar.vue'
  if (ignore.indexOf(key) !== -1) return

  let path = key.replace(/(\.vue$)|(\.)/g, '')
  const title = key.replace(/(\.vue$)|(\.\/)/g, '').split('/').join('.')

  // path 别名
  // 约定目录下 main 为主文件，可以通过目录名访问
  // /foo/main -> /foo
  const MAIN_KEY = '/main'
  if (path.indexOf(MAIN_KEY) > 0) {
    path = path.replace(MAIN_KEY, '')
  }

  routes.push({
    path: path,
    component: files(key).default,
    meta: {
      title: title
    }
  })
})

const router = new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        title: 'meta.login'
      }
    },
    {
      path: '/ready',
      name: 'ready',
      component: () => import('./views/Ready.vue'),
      meta: {
        title: 'meta.ready',
        requiresAuth: true
      }
    },
    {
      path: '/',
      component: Home,
      meta: {
        title: 'meta.home',
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('./views/Dashboard.vue'),
          meta: {
            title: 'meta.dashboard'
          }
        },
        // 引入自动注册的配置
        ...routes,
        {
          path: '*',
          name: 'notFound',
          component: () => import('./views/NotFound.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 是否需要登录后访问
  const isRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // 是否已登陆
  const token = getToken()
  // 是否准备完毕
  const isReady = store.state.isReady

  // 需要登录但未登录，拦截到登录页
  if (isRequiresAuth && !token) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
    return
  }

  // if (isRequiresAuth && !isReady && to.path !== '/ready') {
  //   next({
  //     path: '/ready',
  //     query: { redirect: to.fullPath }
  //   })
  //   return
  // }

  // 已登录并且是登出页，拦截到首页
  // if (token && to.path === '/login') {
  //   next('/')
  //   return
  // }

  next()
})

export default router
