/**
 * 导航守卫
 */
import store from '@/store'
import { getToken } from '@/utils/token'

export function beforeEach (to, from, next) {
  // 是否需要登录后访问
  const isRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // 是否已登陆
  const token = getToken()

  // 需要登录但未登录，拦截到登录页
  if (isRequiresAuth && !token) {
    store.commit('app/setInterceptedPath', to.fullPath)
    next('/login')
  }

  // 已登录并且是登出页，拦截到首页
  if (token && to.path === '/login') {
    next('/')
  }

  next()
}

export function afterEach (to, from) {
  window.document.title = `scaffold | ${to.meta.title}`
}
