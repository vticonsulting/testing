<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button id="test-button" @click="push">Test Button</button>
  </div>
</template>

<script>
export default {
  methods: {
    push() {
      // eslint-disable-next-line
      dataLayer.push({
        event: "vpv",
        vpvUrl: "/virtual/createAccount/googleSignUpForm",
        vpvTitle: "Registration Form – Google Signup Form"
      });
    }
  }
};
</script>
