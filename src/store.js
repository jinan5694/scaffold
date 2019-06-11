import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    isStartup: false
  },
  mutations: {
    toggleCollaspse (state) {
      state.isCollapse = !state.isCollapse
    },
    setStartup (state, status) {
      state.isStartup = status
    }
  },
  actions: {

  }
})
