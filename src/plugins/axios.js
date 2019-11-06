import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
import { Message } from 'element-ui'
import { baseURL } from '@/config'
import { getToken } from '@/utils/token'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  responseType: 'json'
})

instance.interceptors.request.use(config => {
  // token的处理
  const token = getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  // 参数序列化
  if (config.method === 'get') {}

  return config
}, error => {
  Message({
    showClose: true,
    message: error,
    type: 'error'
  })

  return Promise.reject(error)
})

instance.interceptors.response.use(resp => {
  return resp.data
}, error => {
  Message({
    showClose: true,
    message: error,
    type: 'error'
  })

  return Promise.reject(error)
})

Vue.use({
  install (Vue) {
    // 采用这种方式定义属性，不会被修改和删除
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
})

export default instance
