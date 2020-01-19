<template>
  <button
    @click="toggle"
    label="view-rewards-button"
    class="px-6"
  >
    {{ $t('view_rewards') }}
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
