<template>
  <div id="header">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      message: '导航栏'
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/index.scss'
</style>
