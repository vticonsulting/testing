<template>
  <section class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 overflow-auto w-full max-w-6xl mx-auto pt-28 lg:pt-44 pb-32">
      <slot />
    </main>
    <AppFooter />
  </section>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter },
}
</script>
