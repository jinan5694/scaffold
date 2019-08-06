<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import LocaleMixin from './mixins/locale'
// 引入项目样式
// import './style/index.scss'

export default {
  name: 'App',
  mixins: [LocaleMixin]
}
</script>
