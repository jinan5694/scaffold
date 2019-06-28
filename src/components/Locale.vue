<template>
  <el-button
    plain
    @click="toggleLocale"
  >
    {{ btnText }}
  </el-button>
</template>
<script>
import KEYS from '../i18n/keys'
export default {
  name: 'Locale',
  computed: {
    locale () {
      return this.$store.state.locale
    },
    btnText () {
      return this.locale === KEYS.ZH ? 'English' : '中文'
    }
  },
  methods: {
    toggleLocale () {
      this.$store.commit('switchLocale', this.locale === KEYS.EN ? KEYS.ZH : KEYS.EN)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
