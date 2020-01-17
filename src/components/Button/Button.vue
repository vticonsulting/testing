<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    :name="label"
    class="
      focus:outline-none
      focus:shadow-outline

      transform
      origin-center
      hover:translate-y-px
      duration-200
      ease-in-out
    "
    :class="[classObject]"
    :disabled="isDisabled"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <span class="visually-hidden">Some text to announce</span>
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
    isBordered: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
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
      return [
        this.isSmall ? 'text-sm' : '',
        {
          'rounded-full': this.isRounded,
          'border-2': this.isBordered,
          'bg-green-700 hover:bg-green-800 text-white': this.isPrimary,
          'bg-blue-700 hover:bg-blue-800 text-white': this.isSecondary,
          'bg-red-600 hover:bg-red-700 text-white': this.isDestructive,
          'bg-gray-300 text-gray-700': this.isDisabled,
        },
      ]
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
      // this.$buefy.toast.open(`BaseButton.click: ${$event.currentTarget.name}`)
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

<style>
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
</style>
