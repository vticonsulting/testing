<template>
  <button @click="menuOpen = !menuOpen" class="flex text-left items-center focus:outline-none">
    <div class="relative">
      <svg viewBox="0 0 16 16" class="fill-current text-gray-600 rounded-full border-2 border-gray-200 shadow-md w-16 h-16 lg:w-20 lg:h-20 mb-0 mx-3">
        <circle cx="8" cy="8" r="8" />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center text-5xl">
        T
      </div>
    </div>
    <div>
      <h1
        class="page-header text-xl sm:text-xl md:text-2xl lg:text-3xl text-white leading-none font-light shadow"
      >{{ title }}</h1>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ProgramHeader',
  props: {
    title: {
      type: String,
      default: 'Program Title',
    },
  },
}
</script>
