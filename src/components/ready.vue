<template>
  <div class="ready">
    ready
  </div>
</template>
<script>
export default {
  data () {
    return {
      isReady: false
    }
  },
  created () {
    this.ready()
  },
  methods: {
    ready () {
      setTimeout(() => {
        this.isReady = true
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
