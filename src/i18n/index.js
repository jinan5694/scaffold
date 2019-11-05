import Vue from 'vue'
import VueI18n from 'vue-i18n'

import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import LOCALE_CODES from '@/i18n/locale-codes'
import { getLocale } from '@/i18n/utils'

import en from '@/i18n/locales/en'
import zh from '@/i18n/locales/zh'

Vue.use(VueI18n)

const messages = {}
messages[LOCALE_CODES.EN] = { ...en, ...enLocale }
messages[LOCALE_CODES.ZH] = { ...zh, ...zhLocale }

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

// 实现element插件的多语言切换
locale.i18n((key, value) => i18n.t(key, value))

export default i18n
