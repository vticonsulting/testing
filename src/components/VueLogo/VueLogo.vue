<template>
  <svg viewBox="0 0 261.76 226.69">
    <path
      d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z"
      :fill="colors[0]"
    />
    <path
      d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z"
      :fill="colors[1]"
    />
  </svg>

</template>

<script>
export default {
  name: 'VueLogo',
  props: {
    colors: {
      type: Array,
      default: () => ([
        '#41b883', '#34495e',
      ]),
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
