<template>
  <div id="dashboard">
    <div class="flex justify-center">
      <ParticipantCard @rewards-open="showRewards" />
    </div>
    <div class="dashboard-accordion">
      <ProgramOverview />
      <SchoolGoalsAndStats />
      <HowToGetPledges />
      <StudentStarVideo />
      <ThePledges />
      <button class="p-3 px-8 m-4 border rounded-xl shadow-xl uppercase font-bold bg-white hover:bg-gray-200 text-red-800 hover:text-red-900 hover:scale-95 transform duration-200 ease-in-out">
        Documentation
      </button>
      <BusinessLeaderboard />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    rewardsOpen: false,
    show: false,
  }),
  created () {
    this.$store.dispatch('getUser')
  },
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
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:title',
        content: 'Test title',
        // following template options are identical
        // template: '%s - My page',
        template: chunk => `${chunk} - Demo App`,
        vmid: 'og:title',
      },
    ],
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
