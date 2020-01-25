<template>
  <article class="flex flex-col items-center justify-center w-full mx-auto max-w-lg">
    <div class="fade-vertical w-128 pt-6 pb-16 sm:bg-gray-100 text-white sm:text-black text-center shadow-lg rounded-xl">
      <h1 class="mb-2 text-4xl font-semibold leading-none">
        Welcome!
      </h1>
      <div class="flex justify-center items-center w-full text-gray-400">
        <span class="mx-2"><AudioLoadingIndicator class="h-6 " /></span>
        <span class="mx-2"><BarsLoadingIndicator class="h-6" /></span>
        <span class="mx-2"><OvalLoadingIndicator class="h-12" /></span>
        <span class="mx-2"><ThreeDotsLoadingIndicator class="h-2 text-green-600" /></span>
      </div>

      <p class="max-w-xs mx-auto mb-8 px-8 text-lg">
        Becoming a fundraising hero is now easier than ever.
      </p>

      <RouterLink to="/dashboard" class="w-48 mb-6 py-2 inline-block font-bold rounded-full shadow border-2 border-blue-500 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:shadow-outline">
        Get Started
      </RouterLink>
      <!-- <div class="flex flex-col items-center justify-center">
        <button class="w-48 py-2 block font-bold rounded-full shadow-lg border sm:bg-white">
          Sign Up
        </button>
        <div class="w-48 is-divider" data-content="OR" />
      </div> -->
      <!-- <SlackLogo /> -->

      <section class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <div class="flex flex-wrap mb-6">
          <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105
          hover:bg-gray-200"
          >
            <x-Icon name="share" />
          </button>
          <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <x-Icon name="smartphone" />
          </button>
          <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <x-Icon name="copy" />
          </button>
        </div>

        <Trend
          :data="[ 1, 6, 40, 12, 50, 7, 4, 90, ]"
          auto-draw
          smooth
          fill="none"
          stroke-width="6"
          class="h-6 mb-6 stroke-3 stroke-current text-white"
        />

        <div class="flex items-center justify-center w-full max-w-sm
         mx-auto"
        >
          <!-- <button class="holder mx-3 p-3 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <FacebookIcon style="color: #3b5998" />
          </button> -->
          <a href="https://twitter.com/design_coder" class="holder mx-3 p-3 bg-twitter text-white rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/design_coder" class="holder mx-3 p-3 bg-instagram rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <InstagramIcon />
          </a>
          <a href="https://github.com/victortolbert" class="holder mx-3 p-3 bg-black text-white rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <GithubIcon />
          </a>
          <!-- <a href="mailto:victortolbert@boosterthon.com"></a> -->
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  data: function () {
    return {
      options: {},
      series: [44, 55, 41, 17, 15],
    }
  },
  metaInfo: {
    // title: 'My Awesome Webapp',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
}
</script>

<style>
.holder {
   @apply p-3 transform transition-transform duration-200 ease-in-out;
}
.holder:hover {
  @apply scale-110;
}
section.reveal {
  height: 100vh;
}
.fade-vertical {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeVertical 1s 1s forwards linear;
  will-change: transform, opacity;
}

</style>
