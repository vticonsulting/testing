<template>
  <button
    @click.self="menuOpen = !menuOpen"
    class="menu-toggle"
    :class="[{
      checked: menuOpen
    }]"
  >
    <div />
  </button>
</template>

<script>

export default {
  name: 'MenuToggle',
  data () {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggle (e) {
      this.$emit('toggle', e.currentTarget.name)
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
.menu-toggle.checked:before { transform: translateY(10px) rotate(135deg) }
.menu-toggle.checked:after { transform: translateY(-10px) rotate(-135deg) }
.menu-toggle.checked div { transform: scale(0) }
</style>
