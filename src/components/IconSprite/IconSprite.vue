<template>
  <svg width="24" height="24" class="icon">
    <use :xlink:href="`/v3-assets/dashboard/icons.svg#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'IconSprite',
  props: ['name'],
}
</script>
