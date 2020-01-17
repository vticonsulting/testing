<template>
  <div class="p-3 text-sm text-center bg-gray-100">
    <p>{{ $t('content_info') }}</p>
    <p>
      <a class="text-blue-700" href="#">{{ $t('need_help') }}</a> |
      <span v-if="$i18n.locale == 'es'">
        <a class="text-blue-700" @click="$i18n.locale = 'en'">{{ $t('lang') }}</a>
      </span>
      <span v-if="$i18n.locale == 'en'">
        <a class="text-blue-700" @click="$i18n.locale = 'es'">{{ $t('lang') }}</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppInfo',
}
</script>
