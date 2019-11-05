<template>
  <div
    v-loading="loading"
    class="ready"
    :element-loading-text="$t('ready.loading')"
  >
    <div v-show="retry" class="retry">
      <p>{{ $t('ready.text') }}</p>
      <el-button type="primary" @click="handleReload">{{ $t('ready.reload') }}</el-button>
    </div>
  </div>
</template>
<script>
import { STATUS } from '@/components/composables/use-ready'

export default {
  name: 'Ready',
  props: {
    status: {
      type: String,
      default: STATUS.PROCESSING
    }
  },
  computed: {
    loading () {
      return this.status === STATUS.PROCESSING
    },
    retry () {
      return this.status === STATUS.FAILED
    }
  },
  methods: {
    handleReload () {
      console.log('reload')
    }
  }
}
</script>
<style lang="scss" scoped>
.ready {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .retry {
    text-align: center;
  }
}
</style>
