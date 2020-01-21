<template>
  <label class="locale-changer">
    <select class="form-select block w-full m-1" v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data () {
    return { langs: ['de', 'en', 'es'] }
  },
}
</script>
