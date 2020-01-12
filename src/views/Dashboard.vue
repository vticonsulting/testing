<template>
  <main class="w-full max-w-6xl mx-auto bg-white pt-28 lg:pt-40">
    <!-- Participant Cards -->
    <div class="lg:flex mb-6 lg:mb-8 px-3 lg:px-0">
      <!-- Participant Card -->
      <div class="w-full mb-3 lg:mb-0 lg:mx-2 p-4 border-2 rounded-lg border-gray-300 bg-white">
        <div class="flex w-full mb-3 lg:px-3 relative">
          <div class="media-left mr-4">
            <a>
              <Avatar />
            </a>
          </div>
          <div class="self-center flex-1">
            <h2 class="text-xl">
              John Doe
            </h2>
          </div>
          <div class="self-start text-right">
            <button class="text-sm has-text-grey">
              Edit
            </button>
          </div>
        </div>

        <section class="lg:px-3">
          <div class="mb-4">
            <div class="h-3 rounded-lg bg-gray-300 relative">
              <span class="z-20 h-full absolute top-0 rounded-lg bg-green-700" style="width: 50%" />
              <span class="z-10 h-full absolute top-0 rounded-lg bg-orange-600" style="width: 50%" />
            </div>
            <div class="mt-2">
              <h3 class="font-bold flex items-center">
                <svg viewBox="0 0 16 16" class="fill-current text-green-700 h-4 w-4 mr-1">
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span>
                  Total Pledged $5 of $10
                </span>
              </h3>
              <h4 class="text-sm capitalize">
                per reading challenge
              </h4>
            </div>
          </div>
          <div class="button-container text-center">
            <BaseButton is-secondary class="px-6">
              View Rewards
            </BaseButton>
          </div>
        </section>
      </div>
    </div>

    <!-- Enter Pledge Button -->
    <div class="flex items-center justify-center mb-6 lg:mb-8 px-3">
      <BaseButton is-primary class="w-full py-3">
        Enter Pledge
      </BaseButton>
    </div>

    <!-- Dashboard Accordionn -->
    <div class="mx-3 lg:mx-0">
      <button class="block w-full flex items-center justify-between p-3 text-blue-800 border-t-2 border-gray-300">
        <h1 class="text-xl font-semibold">
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

      <!-- Video -->
      <div class="h-48 mx-2 mb-6 bg-gray-300 rounded" />

      <!-- Playlist -->
      <div class="flex mx-2 mb-6 border-b">
        <button class="inline-block p-2 border-b-2 border-blue-700 text-blue-700 font-bold">
          Program Videos
        </button>
        <button class="inline-block p-2 focus:text-gray-900">
          Character Videos
        </button>
      </div>

      <!-- About the Program -->
      <div class="mx-2 mb-6">
        <h2 class="mb-1 text-blue-900 font-bold">
          About the Program
        </h2>
        <p class="">
          Roosevelt Franklin Elementary School is hosting a two-week fundraiser powered by the Booster team! Instead of selling items, families will gather pledges to help their school, while students experience a world-class character program and participate in the Salesforce /@$!%^&*() Kenny. Most students will complete read...
        </p>
      </div>

      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300">
        <h1 class="text-xl font-semibold text-blue-800">
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
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300">
        <h1 class="text-xl font-semibold text-blue-800">
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
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300">
        <h1 class="text-xl font-semibold text-blue-800">
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
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300">
        <h1 class="text-xl font-semibold text-blue-800">
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
      <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300">
        <h1 class="text-xl font-semibold text-blue-800">
          Our Business Leaderboard
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
    </div>
  </main>
</template>

<script>
export default {
  name: 'Dashboard',
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
