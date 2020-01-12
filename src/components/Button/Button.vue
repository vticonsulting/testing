<template>
  <button
    class="
      block
      leading-none
      w-full
      mx-auto
      py-2
      px-4
      bg-white
      rounded
      border-2
      font-semibold
      shadow-md
      hover:shadow
      focus:outline-none
      focus:shadow-outline
      lg:max-w-xs
    "
    :class="[classObject]"
    @click="onClick"
    @dblclick="onDoubleClick"
    :disabled="isDisabled"
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
  name: 'Button',
  props: {
    label: String,
    isDestructive: Boolean,
    isDisabled: Boolean,
    isAnimated: Boolean,
    isRounded: {
      type: Boolean,
      default: true,
    },
    isPrimary: Boolean,
    isSecondary: Boolean,
    isSmall: Boolean,
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
        'bg-red-700 hover:bg-red-700 text-white': this.isDestructive,
        'bg-green-700 hover:bg-green-800 text-white': this.isPrimary,
        'bg-blue-700 hover:bg-blue-800 text-white': this.isSecondary,
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
