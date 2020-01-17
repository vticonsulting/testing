<template>
  <div id="dashboard">
    <ParticipantCard @rewards-open="showRewards" />
    <div class="dashboard-accordion">
      <ProgramOverview />
      <SchoolGoalsAndStats />
      <HowToGetPledges />
      <Portal to="modal-outlet">
        <div class="fixed absolute inset-0 bg-black opacity-50 flex items-center justify-center min-h-screen">
          <div class="z-50 bg-white text-black text-2xl absolute inset-0 m-32">
            rewards
          </div>
        </div>
      </Portal>
      <StudentStarVideo />
      <ThePledges />
      <BusinessLeaderboard />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    rewardsOpen: false,
  }),
  watch: {
    rewardsOpen: {
      immediate: true,
      handler (rewardsOpen) {
        if (rewardsOpen) {
          document.body.style.setProperty('position', 'fixed')
          document.body.style.setProperty('overflow-y', 'scroll')
          // document.documentElement.style.setProperty('overflow', 'hidden')
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          document.body.style.setProperty('position', 'static')
          document.body.style.setProperty('overflow-y', 'auto')
          // document.documentElement.style.removeProperty('overflow', 'hidden')
          document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  methods: {
    submit () {
      // this.$buefy.toast('submit')
    },
    showRewards (payload) {
      this.rewardsOpen = payload
    },
  },
}
</script>

<style>
form {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeVertical 1s 1s forwards linear;
  will-change: transform, opacity;
}

@keyframes fadeVertical {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
