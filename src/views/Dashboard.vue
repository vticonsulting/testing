<template>
  <div id="dashboard">
    <!-- Participant Cards -->
    <div class="lg:flex mb-6 lg:mb-8 px-3 lg:px-0">
      <!-- ParticipantCard -->
      <ProgressCard />
    </div>

    <!-- Enter Pledge Button -->
    <!-- <div class="flex items-center justify-center mb-6 lg:mb-8 px-3">
      <BaseButton is-primary class="w-full py-3" is-disabled>
        Enter Pledge
      </BaseButton>
    </div> -->

    <!-- Dashboard Accordionn -->
    <div class="">
      <button class="block w-full flex items-center justify-between p-3 text-gray-800 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          Program Overview
        </h1>
        <div>
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>
      </button>

      <div class="md:flex md:items-start">
        <!-- Video -->
        <div class="mx-2 md:w-1/2">
          <div class="relative elevation-2 w-full mb-6 aspect-ratio-16/9 bg-gray-600" />
          <!-- <figure class="relative elevation-2 w-full mb-6 aspect-ratio-16/9">
            <iframe
              :src="$store.state.videoSource"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </figure> -->
        </div>

        <!-- About the Program -->
        <div class="w-full md:w-1/2 mx-2 mb-6 px-2">
          <h2 class="mb-2 text-gray-900 font-bold">
            About the Program
          </h2>
          <p class="text-gray-600">
            <span class="font-semibold text-gray-800">{{ $store.state.schoolName }}</span> is hosting a two-week fundraiser powered by the Booster team! Instead of selling items, families will gather pledges to help their school, while students experience a world-class character program and participate in the <span class="font-semibold text-gray-800">{{ $store.state.schoolName }} {{ $store.state.unitType }}</span>.
          </p>
        </div>
      </div>

      <!-- Playlist -->
      <!-- <div class="flex mx-2 mb-6 border-b">
        <button class="inline-block p-2 border-b-2 border-gray-700 text-gray-700 font-bold">
          Program Videos
        </button>
        <button class="inline-block p-2 focus:text-gray-900">
          Character Videos
        </button>
      </div> -->

      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
        <h1 class="text-lg lg:text-xl text-left font-semibold">
          School Goals and Stats
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
      <!-- Business Leaderboard Content -->
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
