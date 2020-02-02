<template>
  <div>
    <!-- https://jsfiddle.net/Linusborg/zufy9dx7/ -->
    <ul class="accordion">
      <slot />
    </ul>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId'

const ACCORDION_KEY = uniqueId()

export default {
  name: 'Accordion',
  props: {
    singleExpand: Boolean,
  },
  data: () => ({
    items: {},
  }),
  // we use provide to send down any data and methods that the child
  // needs to interact with the accordion
  provide () {
    return {
      [ACCORDION_KEY]: {
        toggle: this.toggle,
        items: this.items,
        register: this.register,
      },
    }
  },
  methods: {
    register (id, expanded = false) {
      this.$set(this.items, id, expanded)
    },
    toggle (id, expanded = false) {
      this.items[id] = expanded
      if (this.singleExpand) {
        this.$_invertOthers(id, !expanded)
      }
    },
    $_invertOthers (id, expanded) {
      Object.keys(this.items).map(key => {
        if (key !== id) {
          this.items[key] = expanded
        }
      })
    },
  },
}
</script>
