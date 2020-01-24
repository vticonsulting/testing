<template>
  <div class="flex">
    <button class="mx-3 p-3 border rounded-full shadow-lg bg-facebook text-white focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-blue-900">
      <x-Icon name="facebook" />
    </button>
    <button class="mx-3 p-3 border rounded-full shadow-lg bg-easyemailer text-white focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-blue-800">
      <x-Icon name="mail" />
    </button>
    <button class="mx-3 p-3 border rounded-full shadow-lg bg-green-600 text-white focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-green-700">
      <x-Icon name="message" />
    </button>
    <button class="mx-3 p-3 border rounded-full shadow-lg bg-teal-600 text-white focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-teal-700">
      <x-Icon name="link" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
}
</script>

<style>
  /* --color-primary: theme('colors.green.700');
  --color-secondary: theme('colors.blue.700');
  --color-tertiary: theme('colors.orange.700');
  --color-danger: theme('colors.red.700');
  --color-warning: theme('colors.yellow.700');
  --color-success: theme('colors.green.700');
  --color-info: theme('colors.blue.200');
  --color-easyemailer: theme('colors.blue.700');
  --color-message: theme('colors.blue.700');
  --color-facebook: theme('colors.facebook');
  --color-twitter: theme('colors.twitter');
  --input-background-color: theme('colors.blue.100');
  --toast-border-radius: 1rem; */
</style>
