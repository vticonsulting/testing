<template>
  <div class="default_layout">
    <AppHelloBar />

    <AppHeader @menu-open="showMenu" />

    <main class="main-content">
      <slot />

      <AppInfo />

      <!-- <div class="modal-overlay" />
      <div class="modal" />
       -->
      <div v-show="menuOpen" class="menu" />

    </main>

    <AppFooter />
    <AppCookieConsent />
  </div>
</template>

<script>
import AppCookieConsent from '../components/AppCookieConsent'
import AppHelloBar from '../components/AppHelloBar'
import AppHeader from '../components/AppHeader'
import AppInfo from '../components/AppInfo'
import AppFooter from '../components/AppFooter'

export default {
  name: 'DefaultLayout',
  components: { AppHelloBar, AppHeader, AppInfo, AppFooter, AppCookieConsent },
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    showMenu (payload) {
      this.menuOpen = payload
    },
  },
}
</script>

<style>
.default-layout { @apply flex flex-col min-h-screen }

.main-content { @apply flex-1 overflow-auto w-full max-w-6xl mx-auto pt-28 pb-32 }
@screen lg { .main-content { @apply pt-44 } }

.modal-overlay { @apply z-10 absolute inset-0 bg-black opacity-50 }
.modal { @apply z-50 absolute inset-0 bg-white transform scale-50 shadow-xl rounded-lg border }
.menu { @apply z-30 absolute inset-0 elevation-21 bg-white }
/* main { filter: blur(4px) } */
</style>
