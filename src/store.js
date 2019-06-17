import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'zh',
    isCollapse: false,
    isStartup: false
  },
  mutations: {
    toggleCollaspse (state) {
      state.isCollapse = !state.isCollapse
    },
    setStartup (state, status) {
      state.isStartup = status
    },
    switchLocale (state, locale) {
      state.locale = locale
    }
  },
  actions: {

  }
})
