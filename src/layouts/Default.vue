<template>
  <section class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1 overflow-auto w-full max-w-6xl mx-auto pt-28 lg:pt-44 pb-32">
      <slot />
    </main>
    <TheFooter />
  </section>
</template>

<script>
import TheHeader from '../components/Header'
import TheFooter from '../components/Footer'

export default {
  name: 'DefaultLayout',
  components: { TheHeader, TheFooter },
}
</script>
