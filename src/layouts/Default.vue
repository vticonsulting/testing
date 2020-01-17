<template>
  <div class="default_layout">
    <AppHelloBar />

    <AppHeader @menu-open="showMenu" />

    <main class="main-content">
      <slot />

      <AppInfo />
    </main>

    <AppFooter />
    <AppCookieConsent />
    <PortalTarget name="modal-outlet" />
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
    rewardsOpen: false,
  }),
  watch: {
    menuOpen: {
      immediate: true,
      handler (menuOpen) {
        if (menuOpen) {
          document.body.style.setProperty('position', 'fixed')
          document.body.style.setProperty('overflow-y', 'scroll')
          // document.documentElement.style.setProperty('overflow', 'hidden')
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          document.body.style.setProperty('position', 'static')
          document.body.style.setProperty('overflow-y', 'auto')
          // document.documentElement.style.removeProperty('overflow', 'hidden')
          document.body.style.removeProperty('overflow')
        }
      },
    },
  },
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
</style>
