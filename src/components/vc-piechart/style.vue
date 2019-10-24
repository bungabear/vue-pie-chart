<script>
export default {
  name: 'VcStyle',
  render (createElement) {
    return createElement('style', this.$slots.default)
  }
}
</script>