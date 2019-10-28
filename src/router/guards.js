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

  if (isRequiresAuth && !isReady && to.path !== '/ready') {
    next({
      path: '/ready',
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
}

export function afterEach (to, from) {
  window.document.title = `scaffold | ${to.meta.title}`
}
