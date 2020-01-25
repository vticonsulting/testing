<template>
  <div class="flex flex-wrap mb-6">
    <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
      <x-Icon name="add" />
    </button>
    <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
      <x-Icon name="gmail" />
    </button>
    <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
      <x-Icon name="yahoo" />
    </button>
    <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
      <x-Icon name="outlook" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddContactsButtons',
  props: ['show'],
}
</script>
