<template>
  <button class="text-blue-700" @click="toggle">
    {{ locales[selectedLocale].displayName }}
  </button>
</template>

<script>
export default {
  name: 'LocaleToggle',
  props: ['show', 'locale'],
  data: () => ({
    selectedLocale: 'en',
    locales: {
      en: {
        displayName: 'English',
      },
      es: {
        displayName: 'Spanish',
      },
    },
  }),
  methods: {
    toggle () {
      if (this.selectedLocale === 'en') {
        this.selectedLocale = 'es'
      } else {
        this.selectedLocale = 'en'
      }
    },
  },
}
</script>
