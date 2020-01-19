<template>
  <div id="app" class="static bg-white">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import locale from 'date-fns/locale/sk'

const default_layout = 'default'

export default {
  name: 'App',
  data: () => ({}),
  computed: {
    layout () {
      return (this.$route.meta.layout || default_layout) + '-layout'
    },
    now () {
      return this.$date(new Date(), 'DD MMMM YYYY', { locale })
    },
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Demo App',
    // all titles will be injected into this template
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Demo App` : 'Demo App'
    },
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'favicon', href: 'favicon.ico' },
    ],
    style: [
      { cssText: '.foo { color: red }', type: 'text/css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true },
    ],
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
    bodyAttrs: {
      class: ['dark-mode', 'mobile'],
    },
    base: { target: '_blank', href: '/' },

  },
}
</script>
