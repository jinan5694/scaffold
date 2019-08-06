import Vue from 'vue'
import '@/style/index.scss'
import App from './app.vue'
import router from './router'
import store from './store'

// plugins
import './plugins'
import i18n from './i18n/i18n'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
