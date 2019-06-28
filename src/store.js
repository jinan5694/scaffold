import Vue from 'vue'
import Vuex from 'vuex'
import KEYS from './i18n/keys'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: KEYS.ZH,
    isCollapse: false,
    isReady: false
  },
  mutations: {
    toggleCollaspse (state) {
      state.isCollapse = !state.isCollapse
    },
    setReady (state, isReady) {
      state.isReady = isReady
    },
    switchLocale (state, locale) {
      state.locale = locale
    }
  },
  actions: {

  }
})
