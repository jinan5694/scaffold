<template>
  <el-button
    plain
    @click="toggleLocale"
  >
    {{ btnText }}
  </el-button>
</template>
<script>
import LOCALE_CODES from '@/i18n/locale-codes'
import { getLocale, setLocale } from '@/i18n/utils'

export default {
  name: 'Locale',
  computed: {
    locale () {
      return getLocale()
    },
    btnText () {
      return this.locale === LOCALE_CODES.ZH ? 'English' : '中文'
    }
  },
  methods: {
    toggleLocale () {
      setLocale(this.locale === LOCALE_CODES.ZH ? LOCALE_CODES.EN : LOCALE_CODES.ZH)
      window.location.reload()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
