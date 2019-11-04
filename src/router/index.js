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
      title: 'login'
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
        component: () => import('@/views/dashboard.vue'),
        meta: {
          title: 'meta.dashboard'
        }
      },
      // 引入自动注册的配置
      ...autoRegisteredRoutes,
      {
        path: '*',
        name: 'notFound',
        component: () => import('@/views/not-found.vue')
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
