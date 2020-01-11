<template>
  <div class="w-full max-w-6xl mx-auto pt-4 px-4">
    <BaseButton is-primary id="test-button" @click="push">
      Pledge
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    push() {
      dataLayer.push({
        event: "vpv",
        vpvUrl: "/virtual/createAccount/googleSignUpForm",
        vpvTitle: "Registration Form – Google Signup Form"
      });
      dataLayer.push({
        event: "vpv",
        vpvUrl: "/virtual/createAccount/googleSignUpComplete",
        vpvTitle: "Registration Form – Google Signup Completed"
      });
      dataLayer.push({
        event: "vpv",
        vpvUrl: "/virtual/createAccount/emailSignUpComplete",
        vpvTitle: "Registration Form – Email Signup Completed",
        accountType: "<accountType>"
      });
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
