<template>
  <div class="default_layout">
    <AppHeader />
    <main class="main-content">
      <slot />
      <div class="text-sm text-center p-3 bg-gray-100">
        <p>{{ $t('content_info') }}</p>
        <p>
          <a class="text-blue-700" href="#">{{ $t('need_help') }}</a> |
          <a class="text-blue-700" href="#">{{ $t('spanish') }}</a>
        </p>
      </div>
      <!-- <div class="modal-overlay" /> -->
      <!-- <div class="modal" /> -->
      <!-- <div class="menu" /> -->
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter },
}
</script>

<style>
.default-layout { @apply flex flex-col min-h-screen }

.main-content { @apply flex-1 overflow-auto w-full max-w-6xl mx-auto pt-28 pb-32 }
@screen lg { .main-content { @apply pt-44 } }

.modal-overlay { @apply z-10 absolute inset-0 bg-black opacity-50 }
.modal { @apply z-50 absolute inset-0 bg-white transform scale-50 shadow-xl rounded-lg border }
.menu { @apply z-30 absolute inset-y-0 right-0 w-72 elevation-21 bg-white }
/* main { filter: blur(4px) } */
</style>
