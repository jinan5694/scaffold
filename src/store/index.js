import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
    currentUser: {},
    dictionary: [],
    menu: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app
  }
})
