import { addParameters, addDecorator } from "@storybook/vue";
import { themes } from '@storybook/theming';
import theme from './theme'

import '../public/css/tailwind.css'
import Vue from 'vue'
import Vuex from 'vuex';
import { withA11y } from '@storybook/addon-a11y';

import Button from '../src/components/Button'

addDecorator(withA11y);

Vue.component('Button', Button)

Vue.use(Vuex)

addParameters({
  options: {
    theme: theme,
  },
  docs: { 
    inlineStories: true,
    iframeHeight: '60px' 
  }
});