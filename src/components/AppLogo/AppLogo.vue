<template>
  <div class="relative">
    <div>
      <svg viewBox="0 0 16 16" class="w-16 lg:w-20 h-16 lg:h-20 mb-0 mx-3 border-2 border-white rounded-full shadow-md text-white fill-current">
        <circle cx="8" cy="8" r="8" />
      </svg>
    </div>
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- <div class="w-5 h-5 bg-red-700 rounded-full" /> -->
      <LaravelLogo class="h-16" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
}
</script>
