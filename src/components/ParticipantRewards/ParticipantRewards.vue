<template>
  <Transition
    enter-class="opacity-0"
    enter-active-class="ease-out duration-500"
    enter-to-class="opacity-100 translate-y-12"
    leave-class="opacity-100"
    leave-active-class="ease-out duration-500"
    leave-to-class="opacity-0"
    appear
  >
    <div
      v-show="show"
      class="z-30 fixed absolute inset-0 flex items-center justify-center min-h-screen bg-gray-300"
      style="top: 100%"
    >
      <div class="z-40 elevation-10 absolute inset-0 lg:max-w-5xl mx-auto md:p-8 rounded-lg bg-white text-black">
        <header class="flex justify-between items-center">
          <h1 class="mx-2 font-semibold text-xl md:text-3xl text-gray-700">
            Participant Rewards
          </h1>
          <!-- Close Button -->
          <button
            @click="cancel"
            type="button"
            class="flex items-center justify-center p-1 rounded-full opacity-75 hover:opacity-100 text-2xl bg-gray-300 hover:bg-gray-400 hover:scale-110 focus:outline-none focus:shadow-outline transform duration-300 ease-in-out"
          >
            <svg
              class="h-4 w-4 stroke-current stroke-2 fill-current rotate-0 hover:rotate-0 hover:scale-110 transform transition-all duration-300 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          </button>
        </header>

        <div class="flex flex-wrap">
          <figure class="w-1/2 p-2">
            <div class="aspect-ratio-16/9 w-full bg-gray-200" />
          </figure>
          <figure class="w-1/2 p-2">
            <div class="aspect-ratio-16/9 w-full bg-gray-200" />
          </figure>
          <figure class="w-1/2 p-2">
            <div class="aspect-ratio-16/9 w-full bg-gray-200" />
          </figure>
          <figure class="w-1/2 p-2">
            <div class="aspect-ratio-16/9 w-full bg-gray-200" />
          </figure>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ParticipantRewards',
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
