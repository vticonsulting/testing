<template>
  <v-popover>
    <!-- This will be the popover target (for the events and position) -->
    <button class="py-2 px-8 bg-blue-700 text-white focus:outline-none focus:shadow-outline">
      Need Help?
    </button>
    <!-- This will be the content of the popover -->
    <template slot="popover">
      Popped Over
      <a v-close-popover>Close</a>
    </template>
  </v-popover>
</template>

<script>
export default {
  name: 'HelpButton',
}
</script>
