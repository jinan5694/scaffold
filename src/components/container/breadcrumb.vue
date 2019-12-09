<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="item in paths" :key="item.path" :to="item">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { t } from '@/utils/i18n'
export default {
  data () {
    return {
      paths: []
    }
  },
  watch: {
    $route: {
      handler (route) {
        this.paths = route.matched.map(item => {
          const title = item.meta && item.meta.title
          return {
            path: item.path,
            title: title.i18n ? t(title) : title
          }
        })
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
