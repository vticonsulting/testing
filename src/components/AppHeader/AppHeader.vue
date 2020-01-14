<template>
  <div
    v-scroll="handleScroll"
    id="app-header"
    class="z-30 elevation-8 fixed w-full text-white bg-cover bg-center bg-gray-700"
  >
    <div class="flex items-center justify-between w-full h-full max-w-6xl mx-auto">
      <!-- @slot Default  -->
      <slot>
        <!-- ProgramHeaader -->
        <ProgramHeader />
      </slot>
      <!-- MenuToggle -->
      <button
        @click.self="menuOpen = !menuOpen"
        class="hamburger mx-3 text-base"
        :class="[{
          checked: menuOpen
        }]"
      >
        <div />
      </button>
    </div>
  </div>
</template>

<script>
import Scroll from '../../directives/scroll'

export default {
  name: 'AppHeader',
  directives: {
    Scroll,
  },
  data () {
    return {
      menuOpen: false,
      schoolName: 'Franklin Elementary',
      unitType: 'Reading Challenge',
    }
  },
  methods: {
    handleScroll (evt, el) {
      if (window.scrollY > 10) {
        el.classList.add('shrink')
      } else {
        el.classList.remove('shrink')
      }
    },
    toggle (e) {
      this.$emit('toggle', e.currentTarget.name)
    },
  },
}
</script>

<style>
#app-header {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 10%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(/v3-assets/dashboard/images/header_bg.jpg);
}
/* transition: all 0.4s ease-in-out; */
#app-header { @apply py-3 transform origin-top transition-all duration-500 ease-in-out }
#app-header.shrink { @apply py-3 }
@screen lg {
  #app-header { @apply py-8 }
  #app-header.shrink { @apply py-3 }
}

.hamburger { min-width: 2rem }
.hamburger:after,
.hamburger:before,
.hamburger div {
  background-color: #fff;
  border-radius: 3px;
  content: '';
  display: block;
  height: 3px;
  margin: 7px 0;
  transition: all .2s ease-in-out;
}
.hamburger.checked:before { transform: translateY(10px) rotate(135deg) }
.hamburger.checked:after { transform: translateY(-10px) rotate(-135deg) }
.hamburger.checked div { transform: scale(0) }
</style>
