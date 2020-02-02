<template>
  <label>
    {{ label }}
    <input
      :type="type"
      v-bind="
        $attrs
      // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
      "
      :value="value"
      v-on="
        listeners
      // https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
      "
    >
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  // Disable automatic attribute inheritance, so that $attrs are
  // passed to the <input>, even if it's not the root element.
  // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
  inheritAttrs: false,
  // Change the v-model event name to `update` to avoid changing
  // the behavior of the native `input` event.
  // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
  model: {
    event: 'update',
  },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      // Only allow types that essentially just render text boxes.
      validator (value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ].includes(value)
      },
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event =>
          this.$emit('input', event.target.value),
      }
    },
  },
}
</script>
