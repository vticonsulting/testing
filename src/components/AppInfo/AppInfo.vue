<template>
  <div class="text-sm text-center p-3 bg-gray-100">
    <p>{{ $t('content_info') }}</p>
    <p>
      <a class="text-blue-700" href="#">{{ $t('need_help') }}</a> |
      <a class="text-blue-700" href="#">{{ $t('lang') }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppInfo',
}
</script>
