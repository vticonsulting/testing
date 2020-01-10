<template>
  <button
    class="py-1 px-4 border rounded-full shadow focus:outline-none focus:shadow-outline bg-white"
    :class="{ rounded }"
    @click="onClick"
    @dblclick="onDoubleClick"
    :disabled="isDisabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    rounded: Boolean,
    color: {
      type: String,
      default: "#42b983"
    }
  },
  methods: {
    onClick($event) {
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */
      this.$emit("click", $event);
    },
    onDoubleClick($event) {
      /**
       * Emitted when the button is double clicked.
       * @event doubleClick
       * @type {Event}
       */
      this.$emit("double-click", $event);
    }
  }
};
</script>
