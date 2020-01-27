<template>
  <article class="flex flex-col items-center justify-center w-full mx-auto max-w-lg">
    <ColorPalette />
    <Snowf
      v-if="showSnow"
      :amount="150"
      :size="5"
      :speed="1.7"
      :wind="0"
      :opacity="0.8"
      :swing="1"
      :image="null"
      :z-index="1"
      :resize="true"
      color="#fff"
    />
    <div class="fade-vertical w-128 pt-6 pb-16 sm:bg-gray-100 text-white sm:text-black text-center shadow-lg rounded-xl">
      <!-- <div class="users">
        <div v-if="serverError" data-testid="server-error">
          {{ serverError }}
        </div>

        <div v-else-if="users.length === 0" data-testid="no-users">
          No users!
        </div>

        <div v-else>
          <ul id="users">
            <li
              v-for="user in users"
              :key="user.id"
              :data-testid="'user-' + user.id"
            >
              {{ user.name }}
            </li>
          </ul>
        </div>
      </div> -->
      <h1 class="mb-2 text-4xl font-semibold leading-none">
        Welcome!
      </h1>
      <div class="flex justify-center items-center w-full text-gray-400">
        <span class="mx-2"><AudioLoadingIndicator class="h-6 " /></span>
        <span class="mx-2"><BarsLoadingIndicator class="h-6" /></span>
        <span class="mx-2"><OvalLoadingIndicator class="h-12" /></span>
        <span class="mx-2"><ThreeDotsLoadingIndicator class="h-2 text-green-600" /></span>
      </div>

      <div class="w-full max-w-sm mx-auto">
        <!-- <v-select label="language" :options="options" />
        <v-select :options="options" label="language">
          <template slot="option" slot-scope="option">
            <span class="fa" :class="option.icon" />
            {{ option.language }}
          </template>
        </v-select> -->
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

      <p class="max-w-xs mx-auto mb-8 px-8 text-lg">
        Becoming a fundraising hero is now easier than ever.
      </p>

      <RouterLink to="/dashboard" class="w-48 mb-6 py-2 inline-block font-bold rounded-full shadow border-2 border-blue-500 text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:outline-none focus:shadow-outline">
        Get Started
      </RouterLink>
      <!-- <div class="flex flex-col items-center justify-center">
        <button class="w-48 py-2 block font-bold rounded-full shadow-lg border sm:bg-white">
          Sign Up
        </button>
        <div class="w-48 is-divider" data-content="OR" />
      </div> -->
      <!-- <SlackLogo /> -->

      <section class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <div class="flex flex-wrap mb-6">
          <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105
          hover:bg-gray-200"
          >
            <x-Icon name="share" />
          </button>
          <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <x-Icon name="smartphone" />
          </button>
          <button class="mx-3 p-3 border rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <x-Icon name="copy" />
          </button>
        </div>

        <Trend
          :data="[ 1, 6, 40, 12, 50, 7, 4, 90, ]"
          auto-draw
          smooth
          fill="none"
          stroke-width="6"
          class="h-6 mb-6 stroke-3 stroke-current text-white"
        />

        <div class="flex items-center justify-center w-full max-w-sm
         mx-auto"
        >
          <!-- <button class="holder mx-3 p-3 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <FacebookIcon style="color: #3b5998" />
          </button> -->
          <a href="https://twitter.com/design_coder" class="holder mx-3 p-3 bg-twitter text-white rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/design_coder" class="holder mx-3 p-3 bg-instagram rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <InstagramIcon />
          </a>
          <a href="https://github.com/victortolbert" class="holder mx-3 p-3 bg-black text-white rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/VictorTolbert" class="holder mx-3 p-3 bg-linkedin text-white rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/victortolbert" class="holder mx-3 p-3 bg-youtube text-white rounded-full shadow-lg focus:outline-none focus:shadow-outline transform duration-150 ease-in-out hover:scale-105 hover:bg-gray-200">
            <YoutubeIcon />
          </a>
          <!-- <a href="mailto:victortolbert@boosterthon.com"></a> -->
        </div>
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
        res.json().then(json => console.log(json.results))
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
