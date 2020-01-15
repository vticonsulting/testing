<template>
  <footer
    v-scroll="handleScroll"
    class="app-footer z-30 elevation-8 fixed bottom-0 w-full p-5 bg-white border-t text-center"
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
