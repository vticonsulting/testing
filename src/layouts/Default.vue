<template>
  <div class="flex flex-col min-h-screen relative">
    <AppHelloBar />

    <AppHeader
      @menu-open="showMenu"
      @alerts-open="showAlerts"
    />

    <main class="flex-1 overflow-auto w-full border h-full mx-auto pt-28 lg:pt-44 pb-32">
      <slot />

    </main>
    <AppInfo />
    <AppFooter />
    <CookieConsent />
  </div>
</template>

<script>

import CookieConsent from '../components/CookieConsent'
import AppHelloBar from '../components/AppHelloBar'
import AppHeader from '../components/AppHeader'
import AppInfo from '../components/AppInfo'
import AppFooter from '../components/AppFooter'

export default {
  name: 'DefaultLayout',
  components: { AppHelloBar, AppHeader, AppInfo, AppFooter, CookieConsent },
  data: () => ({
    menuOpen: false,
    rewardsOpen: false,
  }),
  watch: {
    menuOpen: {
      immediate: true,
      handler (menuOpen) {
        if (menuOpen) {
          // document.body.style.setProperty('position', 'fixed')
          document.body.style.setProperty('overflow-y', 'scroll')
          // document.documentElement.style.setProperty('overflow', 'hidden')
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          // document.body.style.setProperty('position', 'static')
          document.body.style.setProperty('overflow-y', 'auto')
          // document.documentElement.style.removeProperty('overflow', 'hidden')
          document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  methods: {
    showAlerts (payload) {
      this.alertsOpen = payload
    },
    showMenu (payload) {
      this.menuOpen = payload
    },
  },
}
</script>
