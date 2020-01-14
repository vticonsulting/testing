<template>
  <div>
    <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
      <h1 class="text-lg lg:text-xl text-left font-semibold">
        {{ $t('student_star_video.title') }}
      </h1>
      <ChevronIcon />
    </button>
  </div>
</template>

<script>
export default {
  name: 'StudentStarVideo',
}
</script>
