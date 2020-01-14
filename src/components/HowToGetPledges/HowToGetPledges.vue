<template>
  <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
    <h1 class="text-lg lg:text-xl text-left font-semibold">
      {{ $t('how_to_get_pledges') }}
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
</template>

<script>
export default {
  name: 'HowToGetPledges',
}
</script>
