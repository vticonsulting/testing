<template>
  <button
    @click="toggle"
    label="view-rewards-button"
    class="py-1 px-1 text-sm font-bold w-56"
  >
    <div class="flex items-center justify-center">
      <span>{{ $t('view_rewards') }}</span>
      <!-- <OvalLoadingIndicator class="h-6 text-white" /> -->
    </div>
    <Portal
      to="modal-outlet"
      v-show="rewardsOpen"
    >
      <ParticipantRewards
        :show="rewardsOpen"
        @close="rewardsOpen = false"
      />
    </Portal>
  </button>
</template>

<script>

export default {
  name: 'ViewRewardsButton',
  props: {
    userId: {
      type: Number,
    },
  },
  data: () => ({
    rewardsOpen: false,
  }),
  methods: {
    toggle (e) {
      this.rewardsOpen = !this.rewardsOpen
      this.$emit('toggle', this.rewardsOpen)
    },
  },
}
</script>
