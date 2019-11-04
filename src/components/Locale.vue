<template>
  <el-button
    plain
    @click="toggleLocale"
  >
    {{ btnText }}
  </el-button>
</template>
<script>
import LOCALE_CODES from '../i18n/locale-codes'
export default {
  name: 'Locale',
  computed: {
    locale () {
      return this.$store.state.app.locale
    },
    btnText () {
      return this.locale === LOCALE_CODES.ZH ? 'English' : '中文'
    }
  },
  methods: {
    toggleLocale () {
      this.$store.commit('app/toggleLocale')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
