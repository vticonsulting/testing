<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },
  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  },
  mounted() {
    // const link = document.createElement("link");
    // link.setAttribute("rel", "stylesheet");
    // link.setAttribute(
    //   "href",
    //   "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,500,700"
    // );
    // link.dataset.saviHead = "true";
    // document.head.appendChild(link);
  },
  destroyed() {
    // const link = document.querySelector("head > [data-savi-head]");
    // if (!link) {
    //   return;
    // }
    // document.head.removeChild(link);
  }
};
</script>
