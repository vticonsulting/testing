<template>
  <div class="p-3 text-sm text-center bg-gray-100">
    <p>{{ $t('content_info') }}</p>
    <p>
      <a
        class="text-blue-700"
        href="#"
      >{{ helpLinkText }}</a> |
      <LocaleToggle />
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppInfo',
  props: {
    helpLinkText: {
      type: String,
      default: 'Need Help?',
    },
  },
}
</script>
