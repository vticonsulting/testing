<template>
  <article class="flex flex-col items-center justify-center w-full mx-auto max-w-lg">
    <div class="w-128 pt-6 pb-16 sm:bg-gray-100 text-white sm:text-black text-center shadow-lg rounded-xl">
      <h1 class="mb-2 text-4xl font-semibold leading-none">
        Welcome!
      </h1>

      <p class="max-w-xs mx-auto mb-8 px-8 text-lg">
        Becoming a fundraising hero is now easier than ever.
      </p>

      <figure class="w-full mx-auto">
        <img
          alt="Christy Kudlac"
          src="https://cominex.net/assets/images/christy_kudlac.png"
          class="block mx-auto h-20 h-20 rounded-full elevation-6 border-2 border-white"
        >
        <figcaption>Christy Kudlac</figcaption>
      </figure>

      <RouterLink to="/dashboard" class="w-48 mb-6 py-2 inline-block font-bold rounded-full shadow border-2 border-blue-500 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:shadow-outline">
        Login
      </RouterLink>
      <!-- <div class="flex flex-col items-center justify-center">
        <button class="w-48 py-2 block font-bold rounded-full shadow-lg border sm:bg-white">
          Sign Up
        </button>
        <div class="w-48 is-divider" data-content="OR" />
      </div> -->

      <section class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <!-- <SearchForm /> -->
        <Trend
          :data="[ 1, 6, 40, 12, 50, 7, 4, 90, ]"
          auto-draw
          smooth
          fill="none"
          stroke-width="6"
          class="h-6 mb-6 stroke-3 stroke-current text-white"
        />
        <div class="flex mb-6 bg-white rounded">
          <button class="holder">
            <FacebookFIcon style="color: #3b5998" />
          </button>
          <button class="holder">
            <TwitterIcon style="color: #1da1f2" />
          </button>
          <button class="holder">
            <InstagramIcon style="color: #405de6" />
          </button>
          <button class="holder">
            <PinterestIcon style="color: #405de6" />
          </button>
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
</style>
