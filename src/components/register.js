/**
 * 全局组件自动注册
 * 将‘global-components’目录下的组件自动全局注册，满足以下三种条件
 * 1、根目录下的.vue文件，文件名注册为组件名
 * 2、根目录下的.js文件，文件名注册为组件名
 * 3、根目录下的文件夹，并且文件夹中有index.js文件，会将文件夹名称注册为组件名
 */

import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const files = require.context('./global-components', true, /^\.\/[a-z][a-z-]*(\/index\.js|\.vue|\.js)$/)

files.keys().forEach(filePath => {
  const name = upperFirst(camelCase(filePath.split('/')[1].replace(/\.\w+$/, '')))
  const component = files(filePath).default

  Vue.component(name, component)
})
