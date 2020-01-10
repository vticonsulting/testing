import { action } from "@storybook/addon-actions";

import BaseButton from "./Button.vue";

export default {
  title: "Button",
  component: BaseButton
};

export const Default = () => ({
  components: { BaseButton },
  template:
    '<BaseButton :rounded="true">A Button with rounded edges</BaseButton>'
});

export const Primary = () => ({
  components: { BaseButton },
  template: '<BaseButton :rounded="false">Primary Button</BaseButton>'
});

export const Secondary = () => ({
  components: { BaseButton },
  template: '<BaseButton @click="action">Secondary Button</BaseButton>',
  methods: {
    action: action("clicked")
  }
});
