<template>
  <div :class="$style.container">
    <NavBar />
    <slot />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: { NavBar },
}
</script>

<style lang="scss" module>
.container {
  // min-width: $size-content-width-min;
  // max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
