<template>
  <CookieConsent>
    <template slot="message">
      <span>This website uses cookies. <a
        class="inline-block text-blue-600 border-b border-blue-600"
        href="#"
      >Read more</a></span>
    </template>
    <template slot="button">
      <button class="p-1 text-2xl hover:font-bold">
        &times;
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
@import "~vue-cookieconsent-component/src/scss/cookie-consent";
@import "~vue-cookieconsent-component/src/scss/cookie-consent-bottom";
@import "~vue-cookieconsent-component/src/scss/cookie-consent-transition";
.cookie-consent { @apply justify-between }
</style>
