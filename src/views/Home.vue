<template>
  <Container>
    <el-button @click="toggleLocale">
      切换语言
    </el-button>
    <p>{{ $t('message.hello') }}</p>
    <el-date-picker v-model="value" />
  </Container>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'

export default {
  name: 'Home',
  components: {
    Container
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    toggleLocale () {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'cn' : 'en'
    }
  }
}
</script>
