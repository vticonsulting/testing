<template>
  <Layout>
    <h1 :class="$style.title">
      404
      <template v-if="resource">
        {{ resource }}
      </template>
      Not Found
    </h1>
  </Layout>
</template>

<script>
import Layout from '@/router/layouts/Main.vue'

export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  components: { Layout },
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.title {
  text-align: center;
}
</style>
