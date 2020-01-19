<template>
  <div class="business-leaderboard">
    <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
      <h1 class="text-lg lg:text-xl text-left font-semibold">
        {{ $t('business_leaderboard') }}
      </h1>
      <ChevronIcon />
    </button>
    <div class="mx-3 mb-8 px-7">
      <p
        class="mb-8 text-gray-700"
        v-html="$t('business_leaderboard_description', {
          programName: 'Program Name'
        })"
      />
      <table class="table w-full mb-8">
        <tbody>
          <tr>
            <td>
              <h3 class="">
                1. <a
                  href="http://fritsch.com/molestias-rem-voluptates-qui-ut-numquam"
                  target="_blank"
                >
                  Little and Sons</a>
              </h3>
              <h4 class="text-gray-700">
                Sunt ipsa ut sint placeat commodi necessitatibus modi.
              </h4>
            </td>
            <td class="text-right whitespace-no-wrap">
              $4
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <button class="px-2 text-gray-700 font-semibold focus:outline-none focus:shadow-outline rounded-full">
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
