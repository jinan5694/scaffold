<template>
  <div
    v-loading="loading"
    class="ready"
  />
</template>

<script>

export default {
  name: 'Ready',
  computed: {
    loading () {
      return !this.$store.state.isReady
    }
  },
  mounted () {
    setTimeout(() => {
      this.ready()
      console.log(this.$store.state.isReady)
      this.$router.push('/')
    }, 2000)
  },
  methods: {
    ready () {
      this.$store.commit('setReady', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ready {
    height: 100%;
  }
</style>
