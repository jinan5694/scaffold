import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Startup from './views/Startup.vue'

import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/startup',
      name: 'startup',
      component: Startup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // ...

  console.log(store.state)
  next()
})

export default router
