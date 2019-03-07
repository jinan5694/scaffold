import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'
// import { Message } from 'element-ui'
// import router from '../router.js'

const instance = axios.create({
  baseUrl: '/',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

Vue.use({
  install (Vue) {
    // 采用这种方式定义属性，不会被修改和删除
    Object.defineProperty(Vue.prototype, '$axios', { value: instance })
  }
})
