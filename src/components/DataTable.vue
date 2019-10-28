<template>
  <el-table />
</template>
<script>
import { ref, computed, watch, onMounted } from '@vue/composition-api'
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, ctx) {
    const loading = ref(false)
    console.log(props.url)
    computed()
    watch()
    onMounted()

    function foo () {
      console.log('this is a local function')
    }

    foo()

    return {
      loading,
      fetch
    }
  },
  methods: {
    test () {
      console.log(this.$axios)
    }
  }
}

function fetch () {

}
</script>
<style lang="scss" scoped>

</style>
