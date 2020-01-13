<template>
  <section class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 overflow-auto w-full max-w-6xl mx-auto pt-28 lg:pt-44 pb-32">
      <slot />
      <div class="text-sm text-center p-3 bg-gray-100">
        <p>This fundraising experience is powered by Booster. The mission of Booster is to strengthen schools.</p>
        <p>
          <a class="text-blue-700" href="#">Need Help?</a> |
          <a class="text-blue-700" href="#">Español?</a>
        </p>
      </div>
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
