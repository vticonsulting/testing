<template>
  <div class="app-hello-bar z-50 py-2 flex items-center justify-center w-full text-white">
    <div class="px-3 w-full max-w-5xl mx-auto">
      <div class="flex justify-between items-baseline">
        <span>
          <a href="https://tender-wescoff-b96957.netlify.com" class="text-sm border-b border-transparent border-dotted transform hover:border-gray-200 hover:text-white duration-300 ease-in-out focus:outline-none focus:border-blue-500">
            Component Examples
            <!-- <img class="h-4 text-white" src="https://cominex.net/assets/images/storybook.png"> -->
          </a>
        </span>
        <!-- <span>
          🔥 <button class="text-sm border-b border-gray-600 transform hover:border-gray-200 duration-300 ease-in-out focus:outline-none focus:border-blue-500">
            <span class="font-black">UX</span><span>LAB &rarr; </span></button>
        </span> -->
        <SearchForm />
        <!-- <button class="text-sm border-b border-gray-600 transform hover:border-gray-200 duration-300 ease-in-out focus:outline-none focus:border-blue-500">
          Release Notes
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHelloBar',
}
</script>

<style>
.app-hello-bar {
  background-color: hsla(
    var(--h, 220),
    var(--s, 50%),
    var(--l, 20%),
    var(--a, 1)
  );
}
.app-hello-bar.darker { --l: 10% }
.app-hello-bar.white {
  --h: 0;
  --s: 100%;
  --l: 100%;
}
</style>
