<template>
  <div class="app-header mt-0" v-scroll="handleScroll">
    <AppHelloBar />
    <!-- @slot Default  -->
    <slot>
      <div class="flex items-center justify-between w-full h-full max-w-6xl mx-auto">
        <ProgramHeader title="Titan Next" />
        <MenuToggle @toggle="toggleMenu" />
      </div>
    </slot>
  </div>
</template>

<script>
import AppHelloBar from '../../components/AppHelloBar'
import Scroll from '../../directives/scroll'

export default {
  name: 'AppHeader',
  components: { AppHelloBar },
  directives: { Scroll },
  data: () => ({
    showMenu: false,
  }),
  methods: {
    handleScroll (evt, el) {
      if (window.scrollY > 10) {
        el.classList.add('shrink')
      } else {
        el.classList.remove('shrink')
      }
    },
    toggleMenu (payload) {
      this.showMenu = payload
      this.$emit('menu-open', this.showMenu)
      this.$buefy.toast.open(`AppHeader.menu-open: ${this.showMenu}`)
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
.app-header { @apply z-40 elevation-8 fixed w-full py-3 text-white bg-cover bg-center bg-gray-700 }
.app-header { @apply transform origin-top transition-all duration-500 ease-in-out }
.app-header.shrink { @apply py-3 }

@screen lg {
  .app-header { @apply py-8 }
  .app-header.shrink { @apply py-3 }
}
</style>
