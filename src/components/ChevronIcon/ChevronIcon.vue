<template>
  <div>
    <svg
      class="chevron-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChevronIcon',
}
</script>

<style>
.chevron-icon { @apply h-8 w-8 stroke-current stroke-1 transform rotate-180 duration-500 ease-in-out }
</style>
