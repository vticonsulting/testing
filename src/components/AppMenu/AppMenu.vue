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
    <div v-show="show" class="z-10 absolute inset-0 max-w-6xl mx-auto p-8 w-full h-72 rounded-b-lg border bg-white shadow-lg" style="top: 100%">
      <button @click="cancel" type="button" class="p-1 text-black text-2xl rounded-full bg-gray-200  hover:bg-gray-300 hover:scale-110 flex items-center justify-center transform duration-300 ease-in-out">
        <svg
          class="h-4 w-4 stroke-current stroke-1 transform transition-all rotate-0 hover:scale-110 hover:rotate-180 duration-300 ease-in-out"
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
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'AppMenu',
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
      this.$emit('menu-open', false)
    },
  },
}
</script>
