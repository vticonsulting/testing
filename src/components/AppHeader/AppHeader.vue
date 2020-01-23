<template>
  <div
    class="app-header mt-0"
    v-scroll="handleScroll"
  >
    <AppHelloBar />
    <slot>
      <div class="py-6 relative flex items-stretch justify-between w-full max-w-5xl h-full mx-auto">
        <PortalTarget name="modal-outlet" />
        <PortalTarget name="alerts-outlet" />
        <ProgramHeader class="flex-1">
          <template #program-logo>
            <AppLogo />
          </template>
          <template #program-name>
            <ProgramName />
          </template>
        </ProgramHeader>
        <div class="flex items-center">
          <AppAlertsMenuToggle
            class="mr-1 mt-2 text-gray-500"
            @toggle="toggleAlerts"
          />
          <AppMenuToggle
            class="text-gray-500"
            :user-id="userId"
            @toggle="toggleMenu"
          />
        </div>
        <PortalTarget name="menu-outlet" />

      </div>
    </slot>
  </div>
</template>

<script>

import AppHelloBar from '../../components/AppHelloBar'
import AppMenuToggle from '../../components/AppMenuToggle'
import AppAlertsMenuToggle from '../../components/AppAlertsMenuToggle'
import AppLogo from '../../components/AppLogo'
import Scroll from '../../directives/scroll'

export default {
  name: 'AppHeader',
  components: { AppHelloBar, AppAlertsMenuToggle, AppMenuToggle, AppLogo },
  directives: { Scroll },
  data: () => ({
    showMenu: false,
    showRewards: false,
    userId: 1,
  }),
  methods: {
    handleScroll (evt, el) {
      if (window.scrollY > 10) {
        el.classList.add('shrink')
      } else {
        el.classList.remove('shrink')
      }
    },
    toggleAlerts (payload) {
      this.showAlerts = payload
      this.$emit('alerts-open', this.showAlerts)
      // this.$buefy.toast.open(`AppHeader.menu-open: ${this.showAlerts}`)
    },
    toggleMenu (payload) {
      this.showMenu = payload
      this.$emit('menu-open', this.showMenu)
      // this.$buefy.toast.open(`AppHeader.menu-open: ${this.showMenu}`)
    },
  },
}
</script>

<style>
.app-header {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 10%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(/v3-assets/dashboard/images/header_bg.jpg);
}
.app-header { @apply z-50 elevation-8 fixed w-full text-white bg-cover bg-center bg-gray-700 }
/* .app-header { @apply transform origin-top transition-all duration-500 ease-in-out } */
/* .app-header.shrink { @apply py-3 } */
/* @screen lg {
  .app-header { @apply py-8 }
  .app-header.shrink { @apply py-3 }
} */
</style>
