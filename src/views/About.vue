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
      // eslint-disable-next-line
      dataLayer.push({
        event: "vpv",
        vpvUrl: "/virtual/createAccount/googleSignUpComplete",
        vpvTitle: "Registration Form – Google Signup Completed"
      });
      // eslint-disable-next-line
      dataLayer.push({
        event: "vpv",
        vpvUrl: "/virtual/createAccount/emailSignUpComplete",
        vpvTitle: "Registration Form – Email Signup Completed",
        accountType: "<accountType>"
      });
      // eslint-disable-next-line
      dataLayer.push({
        event: "gaEvent",
        eventCategory: "Account Creation Form Errors",
        eventAction: "<Field>",
        eventLabel: "<Error Message>"
      });
    }
  }
};
</script>
