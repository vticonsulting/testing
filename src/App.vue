<template>
  <div id="app" class="bg-white">
    <component :is="layout">
      <router-view :users="users" />
    </component>
  </div>
</template>
<script>
const default_layout = 'default'

export default {
  name: 'App',
  data () {
    return {
      users: [],
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout'
    },
  },
  created () {
    this.$buefy.toast.open('App.created')

    this.$http
      .get('users')
      .then(res => {
        this.$store.state.user = res.data[0]
      })
  },
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

<style>
.element { animation: var(--animationName, pulse) var(--duration, 2000ms) ease-in-out infinite }
.element.faster { --duration: 500ms }
.element.shaking { --animationName: shake }
</style>
