<template>
  <header
    v-scroll="handleScroll"
    id="app-header"
    class="z-30 elevation-8 fixed w-full text-white bg-cover bg-center bg-blue-700"
  >
    <div class="flex items-center justify-between w-full h-full max-w-6xl mx-auto">
      <!-- @slot Default Header -->
      <slot>
        <div class="flex items-center">
          <img
            src="/v3-assets/dashboard/images/thomas_jefferson.png"
            alt="2000px-Georgia_Athletics_logo.svg.png"
            class="rounded-full shadow-md w-16 h-16 lg:w-20 lg:h-20 mb-0 mx-3"
          >
          <div>
            <h1
              class="page-header text-xl sm:text-xl md:text-2xl lg:text-3xl text-white leading-none font-light shadow"
            >Roosevelt Franklin Elementary School Reading Challenge</h1>
          </div>
        </div>
      </slot>
      <button
        @click="menuOpen = !menuOpen"
        class="text-base hamburger mx-3"
        :class="[
          'focus:outline-none', {
            checked: menuOpen
          }
        ]"
      >
        <div />
      </button>
    </div>
  </header>
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
  @apply py-3 transform origin-top transition-all duration-500 ease-in-out;
  /* transition: all 0.4s ease-in-out; */
}

#app-header.shrink {
  @apply py-3;
}

@screen lg {
  #app-header {
    @apply py-8
  }
  #app-header.shrink {
    @apply py-3;
  }
}

#app-header {
  background-image: linear-gradient(
      180deg,
      rgba(70, 87, 143, 0.9) 10%,
      rgba(8, 1, 52, 0.8) 100%
    ),
    url(/v3-assets/dashboard/images/header_bg.jpg);
}

.hamburger {
  min-width: 2rem;
}

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

.hamburger.checked:before {
  transform: translateY(10px) rotate(135deg);
}

.hamburger.checked:after {
  transform: translateY(-10px) rotate(-135deg);
}

.hamburger.checked div {
  transform: scale(0);
}
</style>
