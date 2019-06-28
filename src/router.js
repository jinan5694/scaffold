import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import { getToken } from './utils/token'

Vue.use(Router)

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'meta.about'
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'meta.home',
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('./views/Dashboard.vue'),
          meta: {
            title: 'meta.dashboard'
          }
        },
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

  // 需要登录但未登录，拦截到登录页
  if (isRequiresAuth && !token) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
    return
  }

  // 已登录并且是登出页，拦截到首页
  if (token && to.path === '/login') {
    next('/')
    return
  }
  next()
})

export default router
