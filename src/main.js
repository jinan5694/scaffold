import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

// plugins
import './plugins'
import i18n from '@/i18n'
import '@/components/register'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
