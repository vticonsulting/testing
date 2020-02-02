<template>
  <form class="login w-full" @submit.prevent="login">
    <label class="block mt-4">
      <span class="text-gray-200">User name</span>
      <input class="form-input mt-1 block w-full" required v-model="username" type="text" placeholder="Snoopy">
    </label>
    <label class="block mt-4">
      <span class="text-gray-200">Password</span>
      <input class="form-input mt-1 block w-full" required v-model="password" type="password" placeholder="Password">
    </label>
    <button class="mt-4 py-2 px-12 font-semibold shadow-md rounded-full bg-blue-600 text-white" type="submit">
      Login
    </button>
    <!-- <BaseInput
      value="Value"
      label="Button Label"
      placeholder="Placeholder"
      @focus="doSomething"
    /> -->
  </form>
</template>

<script>
import { AUTH_REQUEST } from '@/store/actions/auth'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      const { username, password } = this
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/dashboard')
      })
    },
    doSomething () {
      this.$buefy.toast.open(`did something`)
    },
  },
}
</script>
