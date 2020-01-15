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
$toast-border-radius: 0;
@import "~bulma";
@import "~buefy/src/scss/buefy";
// Fix conflicts
.box:not(:last-child),
.content:not(:last-child),
.notification:not(:last-child),
.progress:not(:last-child),
.table:not(:last-child),
.table-container:not(:last-child),
.title:not(:last-child),
.subtitle:not(:last-child),
.block:not(:last-child),
.highlight:not(:last-child),
.breadcrumb:not(:last-child),
.level:not(:last-child),
.list:not(:last-child),
.message:not(:last-child),
.tabs:not(:last-child) {
    margin-bottom: 0 !important;
}
</style>

<style>
.element { animation: var(--animationName, pulse) var(--duration, 2000ms) ease-in-out infinite }
.element.faster { --duration: 500ms }
.element.shaking { --animationName: shake }
</style>
