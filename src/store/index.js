import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    app
  },
  state: {
    initData: null,
    currentUser: {},
    dictionary: [],
    menus: []
  },
  mutations: {
    setInitData (state, data) {
      state.initData = data
    }
  },
  actions: {
  },
  getters: {
    menus (state) {
      const menus = []
      if (!state.initData) return menus
      transferMenu(state.initData.menu, menus)
      return menus
    }
  }

})

function transferMenu (source, target) {
  source.forEach(sourceItem => {
    if (sourceItem.type === 'menu') {
      const targetItem = {
        path: sourceItem.name,
        icon: sourceItem.icon,
        text: sourceItem.title,
        children: []
      }

      if (sourceItem.children && sourceItem.children.length) {
        transferMenu(sourceItem.children, targetItem.children)
      }

      target.push(targetItem)
    }
  })
}
