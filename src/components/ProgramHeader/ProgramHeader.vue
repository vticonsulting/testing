<template>
  <div class="flex text-left items-center focus:outline-none">
    <div class="relative">
      <slot name="program-logo" />
    </div>
    <div>
      <slot name="program-name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramHeader',
}
</script>
