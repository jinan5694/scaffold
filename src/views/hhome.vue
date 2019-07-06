<template>
  <Container>
    <router-view />
  </Container>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'

export default {
  name: 'Home',
  components: {
    Container
  }
}
</script>
