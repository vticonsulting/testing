<template>
  <div class="app-hello-bar hidden z-50 py-2 flex items-center justify-center w-full text-white">
    <div class="px-3 w-full max-w-6xl mx-auto">
      <a href="/dashboard" class="text-sm border-b border-transparent transform hover:border-gray-200 duration-300 ease-in-out">
        Return to classic dashboard
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHelloBar',
}
</script>

<style>
.app-hello-bar {
  background-color: hsla(
    var(--h, 220),
    var(--s, 50%),
    var(--l, 20%),
    var(--a, 1)
  );
}
.app-hello-bar.darker { --l: 10% }
</style>
