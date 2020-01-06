import '../public/css/tailwind.css'
import Vue from 'vue'

import { addParameters } from "@storybook/vue";
import HelloWorld from '../src/components/HelloWorld.vue'

Vue.component('HelloWorld', HelloWorld)

addParameters({
  docs: { inlineStories: true }
});