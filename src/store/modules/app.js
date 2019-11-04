import LOCALE_CODES from '@/i18n/locale-codes'

export default {
  namespaced: true,
  state: {
    locale: LOCALE_CODES.ZH,
    isCollapse: false,
    interceptedPath: null
  },
  mutations: {
    toggleLocale (state) {
      state.locale = state.locale === LOCALE_CODES.ZH ? LOCALE_CODES.EN : LOCALE_CODES.ZH
    },
    toggleCollaspse (state) {
      state.isCollapse = !state.isCollapse
    },
    setInterceptedPath (state, path) {
      state.interceptedPath = path
    },
    clearInterceptedPath (state) {
      state.interceptedPath = null
    }
  },
  actions: {
  }
}
