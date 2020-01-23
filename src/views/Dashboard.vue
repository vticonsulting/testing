<template>
  <article id="dashboard" class="mx-auto w-full">

    <details class="mx-auto w-full max-w-2xl mb-6">
      <summary class="bg-gray-200 p-3 cursor-pointer shadow">
        What is semantic HTML?
      </summary>
      <div class="content p-6">
        <p>
          There are many different elements that HTML provides that convey
          meaning to a document.
        </p>
        <p>
          <kbd>&lt;form></kbd> for example is a semantic element that will mark that
          the contents inside of it as an interactive form. The browser and
          the user know what the content should be like here.
        </p>
        <p>
          &lt;div> for example is not a semantic element. It has
          no implied meaning and is used as a generic container when other
          elements are unsuitable.
        </p>
        <p>
          Writing semantic HTML requires developers to make use of as many
          correct semantic elements as possible to make sure the document
          outline can be understood without having to see it on screen.
        </p>
      </div>

    </details>
    <header class="flex justify-center">
      <ParticipantCard @rewards-open="showRewards" />
    </header>
    <section class="dashboard-accordion mx-auto max-w-5xl">
      <ProgramOverview />
      <SchoolGoalsAndStats />
      <HowToGetPledges />
      <StudentStarVideo />
      <ThePledges />
      <BusinessLeaderboard />
    </section>
  </article>
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
          // document.body.style.setProperty('position', 'fixed')
          document.body.style.setProperty('overflow-y', 'scroll')
          // document.documentElement.style.setProperty('overflow', 'hidden')
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          // document.body.style.setProperty('position', 'static')
          document.body.style.setProperty('overflow-y', 'auto')
          // document.documentElement.style.removeProperty('overflow', 'hidden')
          document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  methods: {
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
section.reveal {
  height: 100vh;
}
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
