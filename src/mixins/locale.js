export default {
  name: 'Locale',
  computed: {
    locale () {
      return this.$store.state.app.locale
    }
  },
  watch: {
    locale: {
      handler (locale) {
        this.$i18n.locale = locale
      },
      immediate: true
    }
  }
}
