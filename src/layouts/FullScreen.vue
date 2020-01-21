<template>
  <main
    class="flex justify-between items-center w-full h-full min-h-screen bg-no-repeat bg-cover bg-center"
    style="background-image: url('/img/galaxy.jpg'); min-height: -webkit-fill-available"
  >
    <slot />
  </main>
</template>

<script>
export default {
  name: 'FullScreenLayout',
}
</script>
