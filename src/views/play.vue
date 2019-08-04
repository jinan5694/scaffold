<template>
  <div class="play">
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
export default {
  data () {
    return {
      flag: true
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
  border: 1px solid red;
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
