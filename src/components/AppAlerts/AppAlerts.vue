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
    <div v-show="show" class="absolute inset-0 w-full max-w-6xl h-screen mx-auto" style="top: 100%">
      <div class="elevation-10 flex flex-col rounded p-0 bg-white text-black shadow-xl">
        <header class="flex items-center justify-between border-t-4 border-red-700">
          <h1 class="text-xl py-1 px-4">
            Alerts
          </h1>
          <!-- Close Button -->
          <button @click="cancel" type="button" class="p-4 text-2xl rounded-full opacity-75 hover:opacity-100 hover:scale-150 flex items-center justify-center transform duration-300 ease-in-out">
            <svg
              class="h-4 w-4 stroke-current fill-current stroke-2 transform transition-all rotate-0 hover:scale-110 hover:rotate-0 duration-300 ease-in-out"
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
        <div class="flex-1 border-t border-gray-400" />
        <footer class="flex justify-center p-4" />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'AlertsMenu',
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
      this.$emit('alerts-open', false)
    },
  },
}
</script>
