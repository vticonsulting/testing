<template>
  <div class="c-base-popup">
    <div v-if="$slots.header" class="c-base-popup__header">
      <slot name="header" />
    </div>
    <div v-if="$slots.subheader" class="c-base-popup__subheader">
      <slot name="subheader" />
    </div>
    <div class="c-base-popup__body">
      <h1>{{ title }}</h1>
      <p v-if="description">
        {{ description }}
      </p>
    </div>
    <div v-if="$slots.actions" class="c-base-popup__actions">
      <slot name="actions" />
    </div>
    <div v-if="$slots.footer" class="c-base-popup__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
