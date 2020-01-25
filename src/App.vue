<template>
  <div id="app" class="h-screen w-full transition-all duration-300">
    <Component :is="layout">
      <RouterView />
    </Component>
  </div>
</template>

<script>
// import unsplash from '@/services/unsplash'
import locale from 'date-fns/locale/sk'

import CrudComponent from './components/Crud.vue'

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
function Crud ({ id, color, name }) {
  this.id = id
  this.color = color
  this.name = name
}
export default {
  name: 'App',
  // metaInfo: {
  //   meta: {
  //     keywords: [ 'design', 'front-end', 'design-systems', 'vue' ],
  //   },
  // },
  components: {
    CrudComponent,
  },
  data: () => ({
    cruds: [],
    mute: false,
  }),
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + 'Layout'
    },
    now () {
      return this.$date(new Date(), 'DD MMMM YYYY', { locale })
    },
  },
  methods: {
    async create () {
      this.mute = true
      const { data } = await window.axios.get('/api/cruds/create')
      this.cruds.push(new Crud(data))
      this.mute = false
    },
    async read () {
      this.mute = true
      const { data } = await window.axios.get('/api/cruds')
      data.forEach(crud => this.cruds.push(new Crud(crud)))
      this.mute = false
    },
    async update (id, color) {
      this.mute = true
      await window.axios.put(`/api/cruds/${id}`, { color })
      this.cruds.find(crud => crud.id === id).color = color
      this.mute = false
    },
  },
  watch: {
    mute (val) {
      // document.getElementById('mute').className = val ? 'on' : ''
    },
  },
  async created () {
    // this.read()
    // await console.log(unsplash('cats'))
  },
  metaInfo: {
    title: 'Demo App',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Demo App ` : 'Demo App'
    },
    htmlAttrs: {
      lang: 'en',
      // amp: true,
    },
    bodyAttrs: {
      // class: ['dark-mode', 'mobile'],
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
