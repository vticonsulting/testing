<template>
  <header class="app-header h-24 lg:h-32 py-4 px-4 text-white bg-cover bg-center bg-blue-700">
    <div class="flex items-center justify-between w-full h-full max-w-6xl mx-auto">
      <slot>
        <div class="flex items-center">
          <img
            src="/v3-assets/dashboard/images/thomas_jefferson.png"
            alt="2000px-Georgia_Athletics_logo.svg.png"
            class="rounded-full shadow-md w-16 h-16 lg:w-20 lg:h-20 mb-0 mr-3"
          >
          <div>
            <h1 class="page-header text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-none font-light shadow">
              Roosevelt Franklin Elementary School
            </h1>
          </div>
        </div>
      </slot>
      <nav class="flex items-center justify-between">
        <button
          type="button"
          name="alert-toggle"
          @click="toggle"
          class="mr-4"
        >
          <svg
            class="h-8 w-8 stroke-current stroke-1 transform duration-500 ease-in-out"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
        <button
          type="button"
          name="menu-toggle"
          @click="toggle"
        >
          <svg
            class="h-8 w-8 stroke-current stroke-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
            />
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
            />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggle (e) {
      console.log('toggled')
      this.$emit('toggle', e.currentTarget.name)
    },
  },
}
</script>

<style>
.app-header {
  background-image:
    linear-gradient(
      180deg,
      rgba(70, 87, 143, 0.9) 10%,
      rgba(8, 1, 52, 0.8) 100%
    ),
    url(/v3-assets/dashboard/images/header_bg.jpg);
}
</style>
