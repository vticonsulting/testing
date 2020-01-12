import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import BaseButton from './Button.vue'

export default {
  title: 'Components/Button',
  component: BaseButton,
  parameters: {
    componentSubtitle: 'The Button component is used add click actions',
  },
}

export const Default = () => ({
  components: { BaseButton },
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
    <BaseButton 
      :is-primary="isPrimary" 
      :is-disabled="isDisabled"
    >{{text}}</BaseButton>
  `,
})

export const Primary = () => ({
  components: { BaseButton },
  template: '<BaseButton is-primary>Primary</BaseButton>',
})

export const Secondary = () => ({
  components: { BaseButton },
  template: '<BaseButton is-secondary @click="action">Secondary</BaseButton>',
  methods: {
    action: action('clicked'),
  },
})

export const Destructive = () => ({
  components: { BaseButton },
  template: '<BaseButton is-destructive>Destructive</BaseButton>',
})

export const Animated = () => ({
  components: { BaseButton },
  template: '<BaseButton is-animated is-primary>Animated</BaseButton>',
})

// export const foo = () => ({
//   components: { BaseButton },
//   template: "<BaseButton>foo</BaseButton>"
// });
// foo.story = { parameters: { docs: { disable: true } } };
