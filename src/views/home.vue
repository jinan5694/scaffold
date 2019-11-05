<template>
  <Container v-if="isReady">
    <router-view />
  </Container>
  <Ready v-else :status="status" />
</template>

<script>
// @ is an alias to /src
import Ready from '@/components/ready'
import Container from '@/components/container.vue'
import useReady from '@/components/composables/use-ready'

export default {
  config: {
    isManuallyRegistered: true // 手动注册
  },
  name: 'Home',
  components: {
    Ready,
    Container
  },
  setup () {
    const { status, isReady } = useReady()
    return { status, isReady }
  }
}
</script>
