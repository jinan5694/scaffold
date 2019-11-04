export default {
  namespaced: true,
  state: {
    locale: 'zh',
    isCollapse: false,
    interceptedPath: null
  },
  mutations: {
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
