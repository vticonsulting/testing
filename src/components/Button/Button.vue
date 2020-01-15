<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="
      block
      leading-none
      inline-block
      mx-auto
      py-2
      px-4
      bg-white
      rounded-md
      border-2
      font-semibold
      shadow-md
      hover:shadow
      focus:outline-none
      focus:shadow-outline
      lg:max-w-xs

      transform
      origin-center
      opacity-75
      hover:opacity-100
      hover:translate-y-px
      duration-200
      ease-in-out
    "
    :class="[classObject]"
    :disabled="isDisabled"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <!-- @slot Default to label prop -->
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
/**
 * Use `Button` to highlight key info with a predefined status.
 */
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    label: String,
    isAnimated: Boolean,
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    isPrimary: {
      type: Boolean,
      default: false,
    },
    isSecondary: {
      type: Boolean,
      default: false,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    isDestructive: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    item: {
      type: String,
      default: 'Foo',
    },
  },
  computed: {
    classObject () {
      return {
        'text-sm': this.isSmall,
        'rounded-full': this.isRounded,
        'transform duration-200 hover:translate-y-1': this.isAnimated,
        'bg-green-700 hover:bg-green-800 text-white': this.isPrimary,
        'bg-blue-700 hover:bg-blue-800 text-white': this.isSecondary,
        'bg-gray-900 hover:bg-black text-white': this.isDestructive,
      }
    },
  },
  methods: {
    onClick ($event) {
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */
      this.$emit('click', $event)
      this.$buefy.toast.open(`BaseButton.click: ${$event}`)
    },
    onDoubleClick ($event) {
      /**
       * Emitted when the button is double clicked.
       * @event doubleClick
       * @type {Event}
       */
      this.$emit('double-click', $event)
    },
  },
}
</script>
