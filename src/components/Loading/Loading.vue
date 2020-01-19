<template>
  <b-loading
    :is-full-page="isFullPage"
    :active.sync="isLoading"
    :can-cancel="true"
  >
    Loading...
  </b-loading>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    isFullPage: {
      type: Boolean,
    },
  },
  methods: {
    openLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 10 * 1000)
    },
  },
}
</script>
