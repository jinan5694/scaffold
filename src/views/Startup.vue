<template>
  <div
    v-loading="loading"
    class="startup"
  />
</template>

<script>

export default {
  name: 'Startup',
  computed: {
    loading () {
      return !this.$store.state.isStartup
    }
  },
  mounted () {
    setTimeout(() => {
      this.setStartup()
      console.log(this.$store.state.isStartup)
      this.$router.push('/')
    }, 2000)
  },
  methods: {
    setStartup () {
      this.$store.commit('setStartup', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .startup {
    height: 100%;
  }
</style>
