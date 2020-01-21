<template>
  <div id="app" class="h-screen">
    <Component :is="layout">
      <RouterView />
    </Component>
  </div>
</template>

<script>
import locale from 'date-fns/locale/sk'
const defaultLayout = 'Default'
const options = {
  url: 'https://frontier.victortolbert.com',
  title: 'Frontier',
  description: 'Site Description',
  img: '/social.png',
  locale: 'en_US',
  twitter: '@VictorTolbert',
  themeColor: 'rebeccapurple',
}

export default {
  name: 'App',
  data: () => ({}),
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + 'Layout'
    },
    now () {
      return this.$date(new Date(), 'DD MMMM YYYY', { locale })
    },
  },
  metaInfo: {
    title: 'Demo App',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Demo App ` : 'Demo App'
    },
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
    bodyAttrs: {
      class: ['dark-mode', 'mobile'],
    },
    base: { target: '_blank', href: '/' },
    meta: [
      { hid: 'author', name: 'author', content: options.url },
      { name: 'publisher', content: options.url },
      { name: 'apple-mobile-web-app-title', content: options.title },
      { name: 'theme-color', content: options.themeColor },
      // Fb
      { name: 'og:title', content: options.title },
      { name: 'og:description', content: options.description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: options.url },
      { name: 'og:image', content: options.img },
      { name: 'og:locale', content: options.locale },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: options.twitter },
      { name: 'twitter:creator', content: options.twitter },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: options.img },
    ],
  },
}
</script>
