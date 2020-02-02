<template>
  <Layout>
    <h1>Home Page</h1>
  </Layout>
</template>

<script>
import appConfig from '@/app.config'
import Layout from '@/router/layouts/Main.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>
