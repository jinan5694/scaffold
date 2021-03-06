/**
 * 导航守卫
 */
import store from '@/store'
import { getToken } from '@/utils/token'
import { t } from '@/utils/i18n'
import { name } from '@/config'

export function beforeEach (to, from, next) {
  // 是否需要登录后访问
  const isRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // 是否已登陆
  const token = getToken()

  // 需要登录但未登录，拦截到登录页
  if (isRequiresAuth && !token) {
    store.commit('app/setInterceptedPath', to.fullPath)
    next('/login')
    return
  }

  // 已登录并且是登出页，拦截到首页
  if (token && to.path === '/login') {
    next('/')
    return
  }

  next()
}

export function afterEach (to) {
  window.document.title = `${t(to.meta.title)} | ${name}`
}
