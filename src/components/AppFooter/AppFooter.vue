<template>
  <footer
    v-scroll="handleScroll"
    id="app-footer"
    class="z-30 elevation-8 fixed bottom-0 w-full p-5 bg-white border-t text-center"
  >
    <slot>
      <PledgeButton class="w-full py-3">
        Enter Pledge
      </PledgeButton>
    </slot>
    <!-- <p>This fundraising experience is powered by Booster. The mission of Booster is to strengthen schools.</p>
    <p>
      <a href="#">
        Need Help?
      </a> |
      <a href="#">
        Español?
      </a>
    </p> -->
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
