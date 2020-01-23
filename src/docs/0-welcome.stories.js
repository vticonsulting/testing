import { linkTo } from '@storybook/addon-links'

import Welcome from './welcome'

export default {
  title: 'Welcome',
}

export const toStorybook = () => ({
  components: { Welcome },
  template: '<Welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
})

toStorybook.story = {
  name: 'to Storybook',
}
