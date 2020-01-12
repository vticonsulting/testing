<template>
  <div
    id="app"
    class="antialiased text-gray-700"
  >
    <!-- <div class="py-2 flex items-center justify-center w-full bg-blue-900 text-blue-100">
      <div class="px-3 w-full max-w-6xl mx-auto">
        <a href="/dashboard" class="text-sm border-b border-transparent transform hover:border-gray-200 duration-300 ease-in-out">
          Return to classic dashboard
        </a>
      </div>
    </div> -->
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
