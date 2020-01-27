import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import BaseButton from './Button.vue'

export default {
  title: 'Base/Button',
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

// A default button.
// A button can be active.
// A button can reduce its padding to fit into tighter spaces.
// A button can be disabled.
// A button can take the width of its container.
// A button can contain an icon.
// A button can contain a label.
// A button can show a loading indicator.
// A button can vary in size.
// A button can be circular.
// A button can show different levels of emphasis.
// A basic button have a subtle appearance.
// A ghost button is similar to a standard button, but have no background color until hovered.
// A button can hint towards a positive consequence.
// A button can hint towards a negative consequence.
// A button can be colorless. Use this variant if you need to customize the button.
// A naked button can have a custom color.
// Buttons can exist together as a group.

export const JSX = () => ({
  render () {
    return (
      <BaseButton>JSX</BaseButton>
    )
  },
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

// export const foo = () => ({
//   components: { BaseButton },
//   template: "<BaseButton>foo</BaseButton>"
// });
// foo.story = { parameters: { docs: { disable: true } } };
