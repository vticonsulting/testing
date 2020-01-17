<template>
  <v-popover placement="right" popover-class="w-full max-w-sm focus:outline-none focus:shadow-outline">
    <!-- This will be the popover target (for the events and position) -->
    <button class="border-b-2 border-transparent focus:outline-none focus:shadow-outline">
      <!-- Help Circle -->
      <svg
        class="h-6 w-6 text-blue-500 hover:text-purple-600 stroke-2 stroke-current transform duration-500 ease-in-out"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    </button>
    <!-- This will be the content of the popover -->
    <template slot="popover">
      <div class="flex justify-between w-full">
        <span>This is a popover</span>
        <a v-close-popover class="text-2xl">&times;</a>
      </div>
    </template>
  </v-popover>
</template>

<script>
export default {
  name: 'HelpButton',
}
</script>
