<template>
  <article class="flex flex-col items-center justify-center w-full mx-auto max-w-lg">
    <div class="fade-vertical w-128 pt-6 pb-16 sm:bg-gray-100 text-white sm:text-black text-center shadow-lg rounded-xl">
      <h1 class="mb-2 text-4xl font-semibold leading-none">
        Welcome!
      </h1>

      <div class="w-full max-w-sm mx-auto">
        <v-select label="name" :filterable="false" :options="options" @search="onSearch">
          <template slot="no-options">
            type to search GitHub repositories..
          </template>
          <template slot="option" slot-scope="option">
            <div class="d-center">
              <img :src="option.owner.avatar_url">
              {{ option.full_name }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              <img :src="option.owner.avatar_url">
              {{ option.full_name }}
            </div>
          </template>
        </v-select>
      </div>

      <RouterLink to="/dashboard" class="w-48 mb-6 py-2 inline-block font-bold rounded-full shadow border-2 border-blue-500 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:shadow-outline">
        Get Started
      </RouterLink>

      <section class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <Trend
          :data="[ 1, 6, 40, 12, 50, 7, 4, 90, ]"
          auto-draw
          smooth
          fill="none"
          stroke-width="6"
          class="h-6 mb-6 stroke-3 stroke-current text-white"
        />
      </section>
    </div>
  </article>
</template>

<script>
import { debounce } from 'lodash'
import Unsplash from 'unsplash-js'
const unsplash = new Unsplash({ accessKey: '00ad9b56c5998633216cab9393e30c6b97a6e3ba4bff0061c11b243c0144993f' })

export default {
  data: function () {
    return {
      // options: {},
      // options: [
      //   { locale: 'de', language: 'German', icon: 'fa-github' },
      //   { locale: 'en', language: 'English', icon: 'fa-database' },
      //   { locale: 'es', language: 'Spanish', icon: 'fa-book' },
      // ],
      options: [],
      series: [44, 55, 41, 17, 15],
      users: [],
      serverError: null,
      showSnow: true,
      results: [],
    }
  },
  methods: {
    onSearch (search, loading) {
      loading(true)
      this.search(loading, search, this)
    },
    search: debounce((loading, search, vm) => {
      fetch(
        `https://api.github.com/search/repositories?q=${escape(search)}`
      ).then(res => {
        res.json().then(json => (vm.options = json.items))
        loading(false)
      })
    }, 350),
  },
  metaInfo: {
    // title: 'My Awesome Webapp',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
  // created () {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(json => {
  //       if (json.error) {
  //         this.serverError = json.error
  //       } else {
  //         this.users = json.users
  //       }
  //     })
  // },
  async mounted () {
    await unsplash.search.photos('dogs', 1, 10, { orientation: 'portrait' })
      .then(res => {
        res.json().then(json => {
          // console.log(json.results)
          this.results = json.results
        })
      })

    let confetti = this.$confetti
    confetti.start({
      shape: 'rect',
    })

    setTimeout(function () {
      confetti.stop()
    }, 3000)
  },
}
</script>

<style>
.holder {
   @apply p-3 transform transition-transform duration-200 ease-in-out;
}
.holder:hover {
  @apply scale-110;
}
section.reveal {
  height: 100vh;
}
.fade-vertical {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeVertical 1s 1s forwards linear;
  will-change: transform, opacity;
}

img {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
}

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}

</style>
