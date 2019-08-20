<template>
  <div class="play">
    <DataTable :url="api" />
    <el-button>
      test
    </el-button>
    <div
      v-show="flag"
      class="box"
    />
  </div>
</template>
<script>
import DataTable from '@/components/DataTable'

const api = '/users/jinan5694/repos'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      flag: true,
      api
    }
  },
  methods: {
    test () {
      this.flag = !this.flag
    }
  }
}
</script>
<style lang="scss" scoped>
.play {
  border: 1px solid $color-primary;
}
.box {
  width: 200px;
  height: 200px;
  background-color: red;
  transition: all 10s ease;
}
.transform {
  transform: translateX(100px);
  transition-duration: 5.2s;
}
</style>
