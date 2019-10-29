<template>
  <Container v-if="isReady">
    <router-view />
  </Container>
  <div v-else>ready</div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'
import ReadyMixin from '@/mixins/ready'

export default {
  config: {
    isManuallyRegistered: true, // 手动注册
    meta: {
      requiresAuth: true
    }
  },
  name: 'Home',
  components: {
    Container
  },
  mixins: [ ReadyMixin ]
}
</script>
