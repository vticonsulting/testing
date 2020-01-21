<template>
  <div class="hello">
    <LocaleChanger />
    <h2>{{ $t('hello') }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
  },
}
</script>
