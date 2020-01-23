<template>
  <div class="business-leaderboard">
    <button class="block w-full flex items-center justify-between p-3 border-t-2 border-gray-300 focus:outline-none">
      <h1 class="text-lg lg:text-xl text-left font-semibold">
        {{ $t('business_leaderboard') }}
      </h1>
      <ChevronIcon />
    </button>
    <div class="flex w-full px-6">
      <div class="flex w-2/3">
        <p
          class="mb-8 max-w-xl text-gray-700"
          v-html="$t('business_leaderboard_description', {
            programName: 'Program Name'
          })"
        />
      </div>
      <div class="w-full border">
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
          <tfoot>
            <td colspan="2">
              <div class="text-center">
                <button class="px-2 text-gray-700 font-semibold focus:outline-none focus:shadow-outline rounded-full">
                  Show More
                </button>
              </div>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
