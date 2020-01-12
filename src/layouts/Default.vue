<template>
  <section class="min-h-screen">
    <TheHeader />
    <slot />
  </section>
</template>

<script>
import TheHeader from '../components/Header'

export default {
  name: 'DefaultLayout',
  components: { TheHeader },
}
</script>
