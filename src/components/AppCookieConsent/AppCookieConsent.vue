<template>
  <CookieConsent>
    <template slot="message">
      This website uses cookies
      <a class="btn btn-link" href="#">Read more</a>
    </template>
    <template slot="button">
      <button class="btn btn-info">
        Accept
      </button>
    </template>
  </CookieConsent>
</template>

<script>
import CookieConsent from 'vue-cookieconsent-component'

export default {
  name: 'AppCookieConsent',
  components: { CookieConsent },
}
</script>

<style lang="scss">
$cookieconstent-padding: 1rem;
$cookieconstent-space: .7rem;
$cookieconstent-compliance-padding: .5rem 2rem;
$cookieconstent-background: #ced4da;
$cookieconstent-compliance-padding: .5rem 2rem;
$cookieconstent-compliance-color: #fff;
$cookieconstent-compliance-background: #237afc;
$cookieconstent-compliance-border: 2px solid currentColor;
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent";
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-bottom";
@import "./node_modules/vue-cookieconsent-component/src/scss/cookie-consent-transition";
</style>
