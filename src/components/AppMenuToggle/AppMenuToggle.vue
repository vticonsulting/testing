<template>
  <button
    @click="toggle"
    :class="[ 'app-menu-toggle', { 'menu-open': menuOpen } ]"
  >
    <slot>
      <div class="shape" />
    </slot>
    <Portal to="menu-outlet" v-show="menuOpen">
      <AppMenu
        :show="menuOpen"
        @close="menuOpen = false"
        :user-id="userId"
      />
    </Portal>
  </button>
</template>

<script>
import AppMenu from '../AppMenu'

export default {
  name: 'AppMenuToggle',
  components: {
    AppMenu,
  },
  props: {
    userId: {
      type: Number,
    },
  },
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    toggle (e) {
      this.menuOpen = !this.menuOpen
      this.$emit('toggle', this.menuOpen)
    },
  },
}
</script>
<style>
.app-menu-toggle { @apply mx-3 text-base; min-width: 2rem }
.app-menu-toggle:after,
.app-menu-toggle:before,
.app-menu-toggle div.shape {
  background-color: #fff;
  border-radius: 3px;
  content: '';
  display: block;
  height: 3px;
  margin: 7px 0;
  transition: all .2s ease-in-out;
}
.app-menu-toggle.menu-open:before { transform: translateY(10px) rotate(135deg) }
.app-menu-toggle.menu-open:after { transform: translateY(-10px) rotate(-135deg) }
.app-menu-toggle.menu-open div.shape { transform: scale(0) }
</style>
