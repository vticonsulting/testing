<template>
  <div id="dashboard">
    <!-- Participant Cards -->
    <div class="lg:flex mb-6 lg:mb-8 px-3 lg:px-0">
      <!-- Participant Card -->
      <div class="elevation-1 w-full mb-3 lg:mb-0 lg:mx-2 p-4 border-2 rounded-lg border-gray-300 bg-white">
        <div class="flex w-full mb-3 lg:px-3 relative">
          <div class="media-left mr-4">
            <button class="rounded-full focus:outline-none focus:shadow-outline">
              <!-- <Avatar /> -->
              <svg class="h-16 w-16 fill-current text-gray-500 hover:text-blue-600 border-2 border-gray-300 hover:border-gray-500 rounded-full" viewBox="0 0 35 30">
                <path
                  d="M17.0491 17.0863C11.8842 17.0863 10.8003 12.4296 10.8003 8.52248V6.96448C10.8003 3.69467 13.6039 1.03455 17.0491 1.03455C20.4942 1.03455 23.2971 3.69467 23.2971 6.96448V8.52248C23.2971 11.7212 22.4854 17.0863 17.0491 17.0863ZM32.1519 25.6032C31.4506 24.2873 30.2654 23.2624 28.8151 22.7169L22.3602 20.292C21.8215 20.0892 21.474 19.6126 21.474 19.0754V16.6221C23.3372 15.049 24.3522 12.2826 24.3522 8.52246V6.96446C24.3522 3.12428 21.0766 0 17.0491 0C13.0215 0 9.74524 3.12428 9.74524 6.96446V8.52246C9.74524 12.3599 10.744 15.1255 12.6241 16.6752V19.0754C12.6241 19.6119 12.276 20.0892 11.7372 20.292L5.28233 22.7169C3.83198 23.2624 2.64679 24.2873 1.94131 25.6122L0 29.4469L0.94463 29.9069L2.88102 26.0819C3.46341 24.9901 4.45024 24.1383 5.66075 23.6825L12.1149 21.2575C13.0652 20.901 13.6792 20.0444 13.6792 19.0754V17.3622C14.64 17.8574 15.7626 18.1208 17.0491 18.1208C18.3299 18.1208 19.4539 17.845 20.4189 17.3311V19.0754C20.4189 20.0444 21.0323 20.901 21.9825 21.2575L28.4367 23.6825C29.6472 24.1383 30.634 24.9901 31.2136 26.0764L33.2449 30L34.1861 29.5317L32.1519 25.6032Z"
                />
              </svg>
            </button>
          </div>
          <div class="self-center flex-1">
            <h2 class="text-gray-700 text-xl">
              {{ $store.state.participants[0].firstName }} {{ $store.state.participants[0].lastName }}
            </h2>
          </div>
          <div class="self-start text-right">
            <button class="px-2 text-xs font-bold tracking-wide uppercase text-gray-600 rounded-full transform duration-300 ease-in-out hover:text-gray-600 focus:outline-none focus:shadow-outline">
              Edit
            </button>
          </div>
        </div>

        <section class="lg:px-3">
          <div class="mb-4">
            <div class="h-3 rounded-lg bg-gray-300 relative">
              <span class="z-20 elevation-1 h-full absolute top-0 rounded-lg bg-gray-700" style="width: 50%" />
              <span class="z-10 elevation-1 h-full absolute top-0 rounded-lg bg-gray-600" style="width: 50%" />
            </div>
            <div class="mt-2">
              <h3 class="font-bold flex items-center">
                <svg viewBox="0 0 16 16" class="fill-current text-gray-700 h-4 w-4 mr-1">
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <span>
                  Total Pledged $5 of $10
                </span>
              </h3>
              <h4 class="text-sm text-gray-700 capitalize">
                per {{ $store.state.unitType }}
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
    <!-- <div class="flex items-center justify-center mb-6 lg:mb-8 px-3">
      <BaseButton is-primary class="w-full py-3" is-disabled>
        Enter Pledge
      </BaseButton>
    </div> -->

    <!-- Dashboard Accordionn -->
    <div class="m-1">
      <button class="block w-full flex items-center justify-between p-3 text-gray-my-2 800 border-t-2 border-gray-300 focus:outline-none focus:shadow-outline">
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

      <button class="block w-full flex items-center justify-between my-2 p-3 border-t-2 border-gray-300 focus:outline-none focus:shadow-outline">
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
      <button class="block w-full flex items-center justify-between my-2 p-3 border-t-2 border-gray-300 focus:outline-none focus:shadow-outline">
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
      <button class="block w-full flex items-center justify-between my-2 p-3 border-t-2 border-gray-300 focus:outline-none focus:shadow-outline">
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
      <button class="block w-full flex items-center justify-between my-2 p-3 border-t-2 border-gray-300 focus:outline-none focus:shadow-outline">
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
      <button class="block w-full flex items-center justify-between my-2 p-3 border-t-2 border-gray-300 focus:outline-none focus:shadow-outline">
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
