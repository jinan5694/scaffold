<template>
  <div>
    foo
    <el-input v-model="value" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  created () {
    console.log('foo has created')
  }
}
</script>
<style lang="scss" scoped>

</style>
