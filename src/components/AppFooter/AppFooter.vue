<template>
  <footer
    v-scroll="handleScroll"
    class="lg:hidden z-50 elevation-8 fixed bottom-0 w-full border-t p-5 text-center bg-white"
  >
    <slot>
      <PledgeButton class="w-full py-3">
        Enter Pledge
      </PledgeButton>
    </slot>
  </footer>
</template>

<script>
import Scroll from '../../directives/scroll'

export default {
  name: 'AppFooter',
  directives: {
    Scroll,
  },
  methods: {
    handleScroll (evt, el) {
      if (window.scrollY > 10) {
        el.classList.add('s')
      } else {
        el.classList.remove('s')
      }
    },
  },
}
</script>
