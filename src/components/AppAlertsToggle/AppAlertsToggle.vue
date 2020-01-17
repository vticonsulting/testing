<template>
  <button
    @click="toggle"
    :class="['self-center focus:outline-none focus:shadow-outline', { 'alerts-open': alertsOpen }]"
  >
    <slot>
      <svg
        class="h-6 w-6 stroke-current  fill-current stroke-2 text-white transform duration-500 ease-in-out"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </slot>
    <Portal to="alerts-outlet" v-show="alertsOpen">
      <AppAlerts
        :show="alertsOpen"
        @close="alertsOpen = false"
        :user-id="userId"
      />
    </Portal>
  </button>
</template>

<script>
import AppAlerts from '../AppAlerts'

export default {
  name: 'AppAlertsToggle',
  components: {
    AppAlerts,
  },
  props: {
    userId: {
      type: Number,
    },
  },
  data: () => ({
    alertsOpen: false,
  }),
  methods: {
    toggle (e) {
      this.alertsOpen = !this.alertsOpen
      this.$emit('toggle', this.alertsOpen)
    },
  },
}
</script>
