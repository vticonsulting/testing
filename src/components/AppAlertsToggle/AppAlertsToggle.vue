<template>
  <div>
    <button
      @click="toggle"
      type="button"
      aria-label="Notifications. Open menu"
      title="Notifications"
      role="button"
      aria-haspopup="true"
      data-toggle="true"
      :class="['inline-block h-8 w-8 self-center focus:outline-none focus:shadow-outline transform', { 'alerts-open': alertsOpen }]"
    >
      <slot>
        <svg
          class="h-8 w-8 stroke-current fill-current stroke-2 text-white transform duration-500 ease-in-out"
          viewBox="0 0 24 24"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        <!-- <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g fill="none">
            <path
              class="icon--read"
              fill="#A3A9AC"
              d="M15 19a3 3 0 11-6 0h6zm3.13-2H5.87C4.838 17 4 16.105 4 15c0-.348.085-.69.246-.992L6.388 10V8C6.388 4.686 8.9 2 12 2s5.611 2.686 5.611 6v2l2.142 4.008c.513.959.201 2.18-.696 2.728a1.778 1.778 0 01-.928.264z"
            />
            <g class="icon--unread">
              <path
                fill="#A3A9AC"
                d="M12.338 2.01a6 6 0 005.274 7.977V10l2.141 4.008c.513.959.201 2.18-.696 2.728a1.778 1.778 0 01-.928.264H5.871C4.837 17 4 16.105 4 15c0-.348.085-.69.246-.992L6.388 10V8C6.388 4.686 8.9 2 12 2c.113 0 .226.004.338.01zM15 19a3 3 0 11-6 0h6z"
              />
              <circle
                cx="18"
                cy="4.25"
                r="4"
                fill="#FA3946"
              />
            </g>
          </g>
        </svg> -->
      </slot>
      <Portal
        to="alerts-outlet"
        v-show="alertsOpen"
      >
        <AppAlerts
          :show="alertsOpen"
          @close="alertsOpen = false"
          :user-id="userId"
        />
      </Portal>
    </button>
  </div>
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
