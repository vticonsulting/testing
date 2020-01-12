<template>
  <div id="app" class="antialiased text-gray-700 bg-blue-100">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const default_layout = 'default'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout'
    },
  },
  mounted () {
    // const link = document.createElement("link");
    // link.setAttribute("rel", "stylesheet");
    // link.setAttribute(
    //   "href",
    //   "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,500,700"
    // );
    // link.dataset.saviHead = "true";
    // document.head.appendChild(link);
  },
  destroyed () {
    // const link = document.querySelector("head > [data-savi-head]");
    // if (!link) {
    //   return;
    // }
    // document.head.removeChild(link);
  },
}
</script>
