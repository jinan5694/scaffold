export default {
  data () {
    return {
      isReady: false
    }
  },
  created () {
    this.ready()
  },
  methods: {
    ready () {
      setTimeout(() => {
        this.isReady = true
      }, 1000)
    }
  }
}
