import Vue from 'vue'
import VueI18n from 'vue-i18n'

import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import en from '@/i18n/locales/en'
import zh from '@/i18n/locales/zh'

Vue.use(VueI18n)

const messages = {
  en: { ...en, ...enLocale },
  zh: { ...zh, ...zhLocale }
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

// 实现element插件的多语言切换
locale.i18n((key, value) => i18n.t(key, value))

export default i18n
