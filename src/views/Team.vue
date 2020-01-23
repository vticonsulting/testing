<template>
  <div>
    <h1 class="border-b text-lg my-8">
      Team
    </h1>        <div class="flex">
      <Bars
        :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        :gradient="['#be0005', '#42b983']"
      />
    </div>
    <button
      class="
            p-3
            px-8
            m-4
            border
            rounded-xl
            shadow-xl
            uppercase
            font-bold
            bg-white
            hover:bg-gray-100
            text-red-800
            hover:shadow-lg
            hover:text-red-900
            hover:scale-95
            focus:outline-none
            focus:shadow-outline
            active:shadow-md
            active:bg-red-900
            active:text-white
            transform
            duration-200
            ease-in-out
          "
    >
      Documentation
    </button>
  </div>
</template>

<script>
export default {
  name: 'Team',
  metaInfo: {
    title: 'Team',
    meta: [
      { charset: 'utf-8' },
      { vmid: 'description', name: 'description', content: 'foo' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
}
</script>
