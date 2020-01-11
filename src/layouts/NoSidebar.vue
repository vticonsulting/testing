<template>
  <main
    class="flex items-center justify-center min-h-screen"
    style="min-height: -webkit-fill-available"
  >
    <slot />
  </main>
</template>

<script>
export default {
  name: "NoSidebarLayout"
};
</script>
