<template>
  <div class="flex items-center justify-center flex-1 w-full max-w-6xl mx-auto">
    <BaseButton id="test-button" class="text-white bg-green-600" @click="push">
      Pledge Online
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
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
