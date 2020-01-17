<template>
  <div v-show="show" class="absolute inset-0 w-full h-screen mt-2 p-3" style="top: 100%">
    <div class="flex flex-col rounded-xl p-4 h-96 bg-blue-600 text-white shadow-xl elevation-10">
      Rewards
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rewards',
  props: {
    show: {
      type: Boolean,
    },
    userId: {
      type: Number,
    },
  },
  created () {
    const listener = document.addEventListener('keydown', e => {
      if (this.show && e.keyCode === 27) {
        this.cancel()
      }
    })

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', listener)
    })
  },
  methods: {
    cancel () {
      this.$emit('close')
      this.$emit('rewards-open', false)
    },
  },
}
</script>
