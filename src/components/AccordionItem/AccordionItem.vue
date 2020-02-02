<template>
  <li
    class="accordion-item"
    :class="isExpanded ? 'expanded': ''" @click="toggle"
  >
    <h4>{{ title }}</h4>
    <hr v-if="isExpanded">
    <slot v-if="isExpanded" />

  </li>
</template>

<script>
import uniqueId from 'lodash/uniqueId'

const ACCORDION_KEY = uniqueId()

export default {
  name: 'AccoridionItem',
  // we inject the provided object, which contains data and methods
  inject: {
    accordion: ACCORDION_KEY,
  },
  props: {
    title: String,
    startExpanded: {
      type: Boolean,
    },
  },
  data: () => ({
    id: uniqueId(),
  }),
  created () {
    // We use a method provided by the accordion to
    // register this item with it.
    this.accordion.register(this.id, this.startExpanded)
  },
  computed: {
    isExpanded () {
      // all informaion about which item is expanded is saved in the accordion
      // component's item data, which we check here
      return this.accordion.items[this.id]
    },
  },
  methods: {
    // we use the accordion's toggle method to toggle this item's
    // expanded state in the accordion component.
    toggle (e) {
      this.accordion.toggle(this.id, !this.isExpanded)
    },
  },
}
</script>
