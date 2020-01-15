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
      <div class="text-center">
        <BaseButton @click="cancel" type="button" is-primary>
          UserId: {{ userId }}
        </BaseButton>
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
      console.log('removing listener')
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
