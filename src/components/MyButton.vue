<template>
  <button
    class="
      py-1 
      px-4
      border 
      rounded-full 
      inline-block   
      focus:outline-none 
      focus:shadow-outline
    "
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>
