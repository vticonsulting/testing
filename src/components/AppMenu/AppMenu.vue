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
    <div v-show="show" class="absolute inset-0 w-full h-screen mt-2 p-3" style="top: 100%">
      <div class="flex flex-col rounded-xl p-4 h-96 bg-blue-600 text-white shadow-xl elevation-10">
        <header class="flex items-center justify-between">
          <h1 class="text-2xl px-4">
            App Menu Header
          </h1>
          <!-- Close Button -->
          <button @click="cancel" type="button" class="p-1 text-2xl rounded-full opacity-75 hover:opacity-100 hover:bg-blue-700 hover:scale-110 flex items-center justify-center transform duration-300 ease-in-out">
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
        <div class="flex-1 p-4">
          Testing
        </div>
        <footer class="flex justify-center p-4">
          <BaseButton class="mx-2" is-small>
            Save
          </BaseButton>
          <BaseButton class="mx-2" is-small is-disabled>
            Cancel
          </BaseButton>
        </footer>
      </div>
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
