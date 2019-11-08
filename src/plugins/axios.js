import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import { Message } from 'element-ui'

import store from '@/store'
import router from '@/router'
import { baseURL } from '@/config'
import { getToken } from '@/utils/token'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  responseType: 'json'
})

// request interceptor
instance.interceptors.request.use(
  config => {
    // token的处理
    const token = getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    // 参数序列化
    if (config.method === 'get') {}

    return config
  },
  error => {
    Message({
      showClose: true,
      message: error,
      type: 'error'
    })

    return Promise.reject(error)
  }
)

// response interceptor
instance.interceptors.response.use(
  config => {
    return config.data
  },
  ({ response, message, stack }) => {
    switch (response.status) {
      case 401:
      // token失效，登出
        console.error(`[app exception] ${message}${stack}`)
        store.commit('clear')
        router.push('/login')
        break
      case 500:
      // 服务异常
        Message.error(message)
        console.error(stack)
        break
      default:
        Message.error(message)
    }
    return Promise.reject(response.data)
  }
)

// plugin register
Vue.use({
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
})

export default instance
