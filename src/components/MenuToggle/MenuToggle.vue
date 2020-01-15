<template>
  <button
    @click="toggle"
    :class="[ 'menu-toggle', { open: on } ]"
  >
    <slot>
      <div />
    </slot>
  </button>
</template>

<script>

export default {
  name: 'MenuToggle',
  data: () => ({
    on: false,
  }),
  methods: {
    toggle (e) {
      this.on = !this.on
      this.$emit('toggle', this.on)
      this.$buefy.toast.open(`Menu.toggle: ${this.on}`)
    },
  },
}
</script>

<style>
.menu-toggle { @apply mx-3 text-base; min-width: 2rem }
.menu-toggle:after,
.menu-toggle:before,
.menu-toggle div {
  background-color: #fff;
  border-radius: 3px;
  content: '';
  display: block;
  height: 3px;
  margin: 7px 0;
  transition: all .2s ease-in-out;
}
.menu-toggle.open:before { transform: translateY(10px) rotate(135deg) }
.menu-toggle.open:after { transform: translateY(-10px) rotate(-135deg) }
.menu-toggle.open div { transform: scale(0) }
</style>
