<template>
  <div id="dashboard">
    <!-- Participant Cards -->
    <div class="lg:flex mb-6 lg:mb-8 px-3 lg:px-0">
      <ParticipantCard />
    </div>

    <div class="dashboard-accordion">
      <ProgramOverview />
      <SchoolGoalsAndStats />
      <HowToGetPledges />
      <StudentStarVideo />
      <ThePledges />
      <BusinessLeaderboard />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  mounted () {
  },
  methods: {
    push () {
      dataLayer.push({
        event: 'vpv',
        vpvUrl: '/virtual/createAccount/googleSignUpForm',
        vpvTitle: 'Registration Form – Google Signup Form',
      })
      dataLayer.push({
        event: 'vpv',
        vpvUrl: '/virtual/createAccount/googleSignUpComplete',
        vpvTitle: 'Registration Form – Google Signup Completed',
      })
      dataLayer.push({
        event: 'vpv',
        vpvUrl: '/virtual/createAccount/emailSignUpComplete',
        vpvTitle: 'Registration Form – Email Signup Completed',
        accountType: '<accountType>',
      })
      dataLayer.push({
        event: 'gaEvent',
        eventCategory: 'Account Creation Form Errors',
        eventAction: '<Field>',
        eventLabel: '<Error Message>',
      })
    },
  },
}
</script>
