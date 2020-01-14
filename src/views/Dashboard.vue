<template>
  <div id="dashboard">
    <!-- Participant Cards -->
    <div class="lg:flex mb-6 lg:mb-8 px-3 lg:px-0">
      <ProgressCard />
    </div>

    <!-- Dashboard Accordion -->
    <div class="">
      <ProgramOverview />

      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          {{ $t('school.goals_and_stats.title') }}
        </h1>
        <div>
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform rotate-180 duration-500 ease-in-out"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          How to Get Pledges
        </h1>
        <div>
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform rotate-180 duration-500 ease-in-out"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          Create Student Star Video
        </h1>
        <div>
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform rotate-180 duration-500 ease-in-out"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          Pledges (10)
        </h1>
        <div>
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform rotate-180 duration-500 ease-in-out"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          Our Business Leaderboard
        </h1>
        <div>
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform duration-500 ease-in-out"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>
      <div class="mx-3 mb-8 px-7">
        <p class="mb-8 text-gray-700">
          If you own a local business, you can be highlighted here if you make a pledge. You can promote your business by linking to your website and leaving a note for the entire Salesforce Test-2016-2-Fall community to see. Want to promote your business? Click "<b>Enter Pledge</b>" now!
        </p>
        <table class="table w-full mb-8">
          <tbody>
            <tr>
              <td>
                <h3 class="">
                  1. <a href="http://fritsch.com/molestias-rem-voluptates-qui-ut-numquam" target="_blank">
                    Little and Sons</a>
                </h3>
                <h4 class="text-gray-700">
                  Sunt ipsa ut sint placeat commodi necessitatibus modi.
                </h4>
              </td>
              <td class="text-right whitespace-no-wrap">
                $4
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <button class="px-2 text-gray-700 font-semibold focus:outline-none focus:shadow-outline rounded-full">
            Show More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../tailwind.config.js'

// const fullConfig = resolveConfig(tailwindConfig)

export default {
  name: 'Dashboard',
  mounted () {
  },
  methods: {
    push () {
      dataLayer.push({
        event: 'vpv',
        vpvUrl: '/virtual/createAccount/googleSignUpForm',
        vpvTitle: 'Registration Form – Google Signup Form',
      })
      dataLayer.push({
        event: 'vpv',
        vpvUrl: '/virtual/createAccount/googleSignUpComplete',
        vpvTitle: 'Registration Form – Google Signup Completed',
      })
      dataLayer.push({
        event: 'vpv',
        vpvUrl: '/virtual/createAccount/emailSignUpComplete',
        vpvTitle: 'Registration Form – Email Signup Completed',
        accountType: '<accountType>',
      })
      dataLayer.push({
        event: 'gaEvent',
        eventCategory: 'Account Creation Form Errors',
        eventAction: '<Field>',
        eventLabel: '<Error Message>',
      })
    },
  },
}
</script>
