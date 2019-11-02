
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: 'el-icon-picture'
    }
  },
  render () {
    const iconClass = this.name.startsWith('el-')
      ? this.name
      : `iconfont ${this.name}`
    return <i class={iconClass} />
  }
}
</script>
<style lang="scss" scoped>

</style>
