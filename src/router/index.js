import Vue from 'vue'
import VueRouter from 'vue-router'
import autoRegisteredRoutes from '@/router/auto-register'
import { beforeEach, afterEach } from '@/router/guards'

import Home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: { i18n: 'route.login' }
    }
  },
  {
    path: '',
    component: Home,
    meta: {
      requiresAuth: true,
      title: { i18n: 'route.home' }
    },
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/dashboard.vue'),
        meta: {
          title: { i18n: 'route.dashboard' }
        }
      },
      // 引入自动注册的配置
      ...autoRegisteredRoutes,
      {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/not-found.vue'),
        meta: {
          title: { i18n: 'route.notFound' }
        }
      }
    ]
  }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
