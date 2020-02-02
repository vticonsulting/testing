<template>
  <div>
    <div class="message">
      {{ uppercasedMessage }}
    </div>
    <div class="count">
      Count: {{ state.count }}
    </div>
    <div class="count">
      Doubled: {{ state.double }}
    </div>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCompositionApi, { reactive, computed } from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  name: 'CompositionApi',
  props: {
    message: {
      type: String,
    },
  },
  setup (props) {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })
    const increment = () => {
      state.count += 1
    }
    return {
      state,
      increment,
      uppercasedMessage: computed(() => props.message.toUpperCase()),
    }
  },
}
</script>
