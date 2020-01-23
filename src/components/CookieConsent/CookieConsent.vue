<template>
  <CookieConsent>
    <template slot="message">
      <div class="flex items-center text-xs">
        <i18n path="cookie_consent_message">
          <v-popover
            class="inline"
            content="content"
            placement="top"
            arrow
            popover-class="w-full max-w-xs focus:outline-none focus:shadow-outline"
          >
            <button class="border-b font-bold border-dotted border-blue-500 focus:outline-none">
              {{ $t('cookie_policy') }}
            </button>
            <template slot="popover">
              <p>{{ $t('about_cookies') }}</p>
            </template>
          </v-popover>
        </i18n>
      </div>
    </template>
    <template slot="button">
      <button class="px-6 rounded-full bg-blue-600 text-white text-xs">
        Got it
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
$cookieconstent-padding: 1rem 1.5rem;
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
