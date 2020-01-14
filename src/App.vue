<template>
  <div id="app" class="bg-white">
    <!-- <div class="some-element py-2 flex items-center justify-center w-full text-white">
      <div class="px-3 w-full max-w-6xl mx-auto">
        <a href="/dashboard" class="text-sm border-b border-transparent transform hover:border-gray-200 duration-300 ease-in-out">
          Return to classic dashboard
        </a>
      </div>
    </div>
    <div class="some-element darker py-2 flex items-center justify-center w-full text-white">
      <div class="px-3 w-full max-w-6xl mx-auto">
        <a href="/dashboard" class="text-sm border-b border-transparent transform duration-300 ease-in-out hover:border-gray-200">
          Return to classic dashboard
        </a>
      </div>
    </div> -->
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
  beforeCreate () {
    console.log(`[${this.$appName}] App.beforeCreate`)
  },
  created () {
    console.log(`[${this.$appName}] App.created`)
    this.$http
      .get('users')
      .then(res => {
        this.$store.state.user = res.data[0]
      })
  },
  beforeMount () {
    console.log(`[${this.$appName}] App.beforeMount`)
  },
  mounted () {
    console.log(`[${this.$appName}] App.mounted`)

    // const link = document.createElement("link");
    // link.setAttribute("rel", "stylesheet");
    // link.setAttribute(
    //   "href",
    //   "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,500,700"
    // );
    // link.dataset.saviHead = "true";
    // document.head.appendChild(link);
  },
  beforeUpdate () {
    console.log(`[${this.$appName}] App.beforeUpdate`)
  },
  updated () {
    console.log(`[${this.$appName}] App.updated`)
  },
  beforeDestroy () {
    console.log(`[${this.$appName}] App.beforeDestroy`)
  },
  destroyed () {
    console.log(`[${this.$appName}] App.destroyed`)
    // const link = document.querySelector("head > [data-savi-head]");
    // if (!link) {
    //   return;
    // }
    // document.head.removeChild(link);
  },
}
</script>

<style>
.some-element {
  background-color: hsla(
    var(--h, 220),
    var(--s, 50%),
    var(--l, 20%),
    var(--a, 1)
  );
}

.some-element.darker {
  --l: 10%;
}

.some-element {
  animation: var(--animationName, pulse) var(--duration, 2000ms) ease-in-out
    infinite;
}

.some-element.faster {
  --duration: 500ms;
}

.some-element.shaking {
  --animationName: shake;
}
</style>
