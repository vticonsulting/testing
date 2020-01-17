<template>
  <div id="app" class="static bg-white">
    <div v-if="!loading" />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const default_layout = 'default'

export default {
  name: 'App',
  computed: {
    ...mapState(['user', 'loading']),
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout'
    },
  },
  created () {
    this.$store.dispatch('getUser')
  },
}
</script>

<style lang="scss">
$toast-border-radius: 0;
$input-radius: 0;
$input-background-color: red;

$dropdown-item-hover-background-color: red;
$dropdown-item-hover-color: red;
$dropdown-content-background-color: red;
$dropdown-content-radius: 0;
$dropdown-content-shadow: none;

$table-row-active-color: red;
$table-row-active-background-color: red;

@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/base/_all.sass";

@import "~buefy/src/scss/utils/_all";
@import "~buefy/src/scss/components/_dialog";
@import "~buefy/src/scss/components/_loading";
@import "~buefy/src/scss/components/_menu";
@import "~buefy/src/scss/components/_pagination";
@import "~buefy/src/scss/components/_table";

// Fix conflicts
.box:not(:last-child),
.content:not(:last-child),
.notification:not(:last-child),
.progress:not(:last-child),
.table:not(:last-child),
.table-container:not(:last-child),
.title:not(:last-child),
.subtitle:not(:last-child),
// .block:not(:last-child),
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
.element {
  animation: var(--animationName, pulse) var(--duration, 2000ms) ease-in-out
    infinite;
}
.element.faster {
  --duration: 500ms;
}
.element.shaking {
  --animationName: shake;
}
</style>
