<template>
  <div class="dashboard">
    <p>{{ $t('message.hello') }}</p>
    <el-date-picker v-model="value" />
    <el-button
      :loading="loading"
      @click="query"
    >
      {{ $t('query') }}
    </el-button>
    <i class="iconfont s-icon-cog-fill" />
    <i class="el-icon-s-tools" />
  </div>
</template>
<script>
export default {
  config: {
    isManuallyRegistered: true // 手动注册
  },
  name: 'Dashboard',
  data () {
    return {
      value: null,
      loading: false
    }
  },
  methods: {
    query () {
      this.loading = true
      const url = '/orgs/octokit/repos'
      this.$axios.get(url).then(resp => {
        this.$message.success(this.$t('message.success'))
        console.log(resp.data)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
