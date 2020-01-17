<template>
  <div v-show="show" class="z-30 fixed absolute inset-0 bg-gray-300 flex items-center justify-center min-h-screen">
    <div class="z-40 bg-white text-black absolute inset-0 lg:max-w-6xl mx-auto mt-20 md:mt-44 rounded-lg elevation-10 pt-8 px-3 md:p-16">
      <h1 class="m-2 text-xl md:text-3xl font-semibold text-gray-700">
        Participant Rewards
      </h1>
      <div class="flex flex-wrap">
        <figure class="w-1/2 p-2">
          <div class="aspect-ratio-16/9 w-full bg-black" />
        </figure>
        <figure class="w-1/2 p-2">
          <div class="aspect-ratio-16/9 w-full bg-black" />
        </figure>
        <figure class="w-1/2 p-2">
          <div class="aspect-ratio-16/9 w-full bg-black" />
        </figure>
        <figure class="w-1/2 p-2">
          <div class="aspect-ratio-16/9 w-full bg-black" />
        </figure>
      </div>
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
