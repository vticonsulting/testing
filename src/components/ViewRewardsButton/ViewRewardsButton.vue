<template>
  <BaseButton
    @click="toggle"
    label="view-rewards-button"
    is-rounded
    is-secondary
    class="px-6"
  >
    {{ $t('view_rewards') }}
  </BaseButton>
</template>

<script>

export default {
  name: 'ViewRewardsButton',
  props: {
    userId: {
      type: Number,
    },
  },
}
</script>
