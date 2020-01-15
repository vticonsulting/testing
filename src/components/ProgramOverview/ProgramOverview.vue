<template>
  <div>
    <button class="block w-full flex items-center justify-between p-3 text-gray-800 border-t-2 border-gray-300 focus:outline-none">
      <h1 class="text-lg lg:text-xl text-left font-semibold">
        {{ $t('program.overview.title') }}

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
      <div class="mx-2 md:w-1/2">
        <BaseVideo />
      </div>

      <!-- About the Program -->
      <div class="w-full md:w-1/2 mx-2 mb-6 px-2">
        <h2 class="mb-2 text-gray-900 font-bold">
          {{ $t('program.overview.subtitle') }}
        </h2>
        <p
          v-html="$t('program.overview.text', {
            schoolName: school.name,
            unitType: $store.state.unitType
          })"
        />
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
  </div>
</template>

<script>
export default {
  props: {
    school: {
      type: Object,
      default: () => ({
        name: 'School Name',
      }),
    },
  },
}
</script>
