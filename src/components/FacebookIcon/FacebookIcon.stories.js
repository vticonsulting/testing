import { text, boolean } from '@storybook/addon-knobs'

import FacebookIcon from './FacebookIcon.vue'

export default {
  title: 'Icons/Facebook',
  component: FacebookIcon,
  parameters: {
    componentSubtitle: 'Facebook Icon',
  },
}

export const Default = () => ({
  components: { FacebookIcon },
  props: {
    text: {
      default: text('Text', 'Default'),
    },
    isPrimary: {
      default: boolean('Primary', false),
    },
    isDisabled: {
      default: boolean('Disabled', false),
    },
  },
  template: `
    <FacebookIcon 
      :is-primary="isPrimary" 
      :is-disabled="isDisabled"
    >{{text}}</FacebookIcon>
  `,
})
