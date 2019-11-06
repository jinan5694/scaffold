import LOCALE_CODES from '@/i18n/locale-codes'

// 项目名称
const name = 'Scaffold'
// 基础URL前缀
let baseURL = '/api'
if (localStorage.baseUrl) {
  baseURL = localStorage.baseUrl
  console.warn(`[app] this baseUrl "${baseURL}" is in use.`)
}

// 默认语言
const locale = LOCALE_CODES.ZH

// 菜单是否展开
const isCollapse = true

export {
  name,
  baseURL,
  locale,
  isCollapse
}
