<template>
  <article id="dashboard" class="mx-auto w-full" style="backdrop-filter: blur(20px)">
    <details class="mx-auto w-full max-w-2xl mb-6">
      <summary class="bg-gray-200 p-3 cursor-pointer shadow rounded-md focus:outline-none focus:shadow-outline">
        <Week />
        {{ week }}
        <Week
          :iso-date="new Date('2020-02-03')"
        />
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

    <div class="flex justify-center mb-6 max-w-5xl mx-auto">
      <PledgeButton class="max-w-small" />
    </div>

    <div class="flex justify-center mb-6 max-w-5xl mx-auto">
      <ShareButtons />
    </div>

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
import getWeek from 'date-fns/getWeek'

export default {
  name: 'Dashboard',
  data: () => ({
    rewardsOpen: false,
    show: false,
  }),
  created () {
    this.$store.dispatch('getUser')
    this.$buefy.toast.open('created')
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
  computed: {
    week () {
      return getWeek(new Date('2020-02-03'), {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
      })
    },
  },
  methods: {
    showRewards (payload) {
      this.rewardsOpen = payload
    },
  },
  page: {
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
