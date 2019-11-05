import LOCALE_CODES from '@/i18n/locale-codes'

// 项目名称
const name = 'Saffold'
// 基础URL前缀
let baseUrl = '/api'
if (localStorage.baseUrl) {
  baseUrl = localStorage.baseUrl
  console.warn(`[app] this baseUrl "${baseUrl}" is in use.`)
}

// 默认语言
const locale = LOCALE_CODES.ZH

// 菜单是否展开
const isCollapse = true

export {
  name,
  baseUrl,
  locale,
  isCollapse
}
