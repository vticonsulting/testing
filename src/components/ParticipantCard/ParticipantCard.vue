<template>
  <div class="participant-card">
    <header>
      <div class="media-left mr-4">
        <button class="rounded-full focus:outline-none focus:shadow-outline" v-html="avatar" />
      </div>
      <div class="self-center flex-1">
        <h2 class="text-gray-700 text-xl">
          {{ participant.firstName }} {{ participant.lastName }}
        </h2>
      </div>
      <div class="self-start text-right">
        <button class="px-2 text-xs font-bold tracking-wide uppercase text-gray-600 rounded-full transform duration-300 ease-in-out hover:text-gray-600 focus:outline-none focus:shadow-outline">
          {{ $t('edit') }}
        </button>
      </div>
    </header>

    <section class="lg:px-3">
      <div class="mb-4">
        <ProgressBar />
        <div class="mt-2">
          <h3 class="font-bold flex items-center">
            <svg viewBox="0 0 16 16" class="fill-current text-gray-700 h-4 w-4 mr-1">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span>
              Total Pledged ${{ participant.pledged }} of ${{ participant.goal }}
            </span>
          </h3>
          <h4 class="text-sm text-gray-700 capitalize">
            per {{ $store.state.unitType }}
          </h4>
        </div>
      </div>
      <div class="button-container text-center">
        <BaseButton is-secondary class="px-6">
          {{ $t('view_rewards') }}
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ParticipantCard',
  props: {
    participant: {
      type: Object,
      default: () => ({
        firstName: 'Booster',
        lastName: 'Nathan',
        pledged: 5,
        goal: 10,
      }),
    },
  },
  computed: {
    avatar () {
      return `
        <svg class="h-16 w-16 fill-current text-gray-500 hover:text-blue-600 border-2 border-gray-300 hover:border-gray-500 rounded-full" viewBox="0 0 35 30">
          <path
            d="M17.0491 17.0863C11.8842 17.0863 10.8003 12.4296 10.8003 8.52248V6.96448C10.8003 3.69467 13.6039 1.03455 17.0491 1.03455C20.4942 1.03455 23.2971 3.69467 23.2971 6.96448V8.52248C23.2971 11.7212 22.4854 17.0863 17.0491 17.0863ZM32.1519 25.6032C31.4506 24.2873 30.2654 23.2624 28.8151 22.7169L22.3602 20.292C21.8215 20.0892 21.474 19.6126 21.474 19.0754V16.6221C23.3372 15.049 24.3522 12.2826 24.3522 8.52246V6.96446C24.3522 3.12428 21.0766 0 17.0491 0C13.0215 0 9.74524 3.12428 9.74524 6.96446V8.52246C9.74524 12.3599 10.744 15.1255 12.6241 16.6752V19.0754C12.6241 19.6119 12.276 20.0892 11.7372 20.292L5.28233 22.7169C3.83198 23.2624 2.64679 24.2873 1.94131 25.6122L0 29.4469L0.94463 29.9069L2.88102 26.0819C3.46341 24.9901 4.45024 24.1383 5.66075 23.6825L12.1149 21.2575C13.0652 20.901 13.6792 20.0444 13.6792 19.0754V17.3622C14.64 17.8574 15.7626 18.1208 17.0491 18.1208C18.3299 18.1208 19.4539 17.845 20.4189 17.3311V19.0754C20.4189 20.0444 21.0323 20.901 21.9825 21.2575L28.4367 23.6825C29.6472 24.1383 30.634 24.9901 31.2136 26.0764L33.2449 30L34.1861 29.5317L32.1519 25.6032Z"
          />
        </svg>`
    },
  },
}
</script>

<style>
.participant-card { @apply elevation-1 w-full mb-3 p-4 border-2 rounded-lg border-gray-300 bg-white }
.participant-card header {  @apply flex w-full mb-3 relative }

@screen lg {
  .participant-card { @apply mb-0 mx-2 }
  .participant-card header {  @apply px-3 }
}
</style>
