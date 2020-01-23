<template>
  <component 
    :is="computedTag"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <x-Icon v-if="iconLeft" :pack="iconPack" :icon="iconLeft" :size="iconSize" />
    <span v-if="label">{{ label }}</span>
    <span v-else-if="$slots.default">
      <slot />
    </span>
    <x-Icon v-if="iconLeft" :pack="iconPack" :icon="iconLeft" :size="iconSize" />
  </component>
</template>

<script>
import Icon from "@/components/Icon";
import config from '../../utils/config'

export default {
  name: "ComponentTemplate",
  components: {
    [Icon.name]: Icon
  },
  props: {
    rounded: {
      type: Boolean,
      default: () => {
        return config.defaultButtonRounded
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return (
          ["medium", "large"].indexOf(value) >= 0
        );
      }
    },
    type: {
      type: "String"
    },
    tag: {
      type: String,
      default: "button",
      validator: value => {
        return (
          [
            "button",
            "a",
            "input",
            "router-link",
            "nuxt-link",
            "n-link",
            "RouterLink",
            "NuxtLink",
            "NLink"
          ].indexOf(value) >= 0
        );
      }
    }
  },
  computed: {
    computedTag() {
      if (
        this.$attrs.disabled !== undefined &&
        this.$attrs.disabled !== false
      ) {
        return "button";
      }
      return this.tag;
    },
    iconSize() {
      if (!this.size || this.size === "is-medium") {
        return "is-small";
      } else if (this.size === "is-large") {
        return "is-medium";
      }
      return this.size;
    }
  }
};
</script>