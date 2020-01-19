import { addParameters, addDecorator } from "@storybook/vue";
import { themes } from '@storybook/theming';
import theme from './theme'

import '../public/css/tailwind.css'

import Vue from 'vue'
import Vuex from 'vuex';
import i18n from '../src/i18n'
import { withA11y } from '@storybook/addon-a11y';

import BaseButton from '../src/components/Button'
import PledgeButton from '../src/components/PledgeButton'

/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-pro/css/all.css'


addDecorator(withA11y);

Vue.component('BaseButton', BaseButton)
Vue.component('PledgeButton', PledgeButton)
Vue.prototype.$appName = 'Rapid Prototyping Toolkit'
Vue.prototype.$appTagline = 'Rapid prototyping challenge'

Vue.use(Vuex)
Vue.use(i18n)

addParameters({
  options: {
    theme: theme,
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: { 
    inlineStories: true,
    iframeHeight: '60px' 
  }
});