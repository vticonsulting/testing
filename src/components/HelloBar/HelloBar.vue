<template>
  <div>
    <div class="hello-bar py-2 flex items-center justify-center w-full text-white">
      <div class="px-3 w-full max-w-6xl mx-auto">
        <a href="/dashboard" class="text-sm border-b border-transparent transform hover:border-gray-200 duration-300 ease-in-out">
          Return to classic dashboard
        </a>
      </div>
    </div>
    <div class="hello-bar darker py-2 flex items-center justify-center w-full text-white">
      <div class="px-3 w-full max-w-6xl mx-auto">
        <a href="/dashboard" class="text-sm border-b border-transparent transform duration-300 ease-in-out hover:border-gray-200">
          Return to classic dashboard
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloBar',
}
</script>

<style>
.hello-bar {
  background-color: hsla(
    var(--h, 220),
    var(--s, 50%),
    var(--l, 20%),
    var(--a, 1)
  );
}
.hello-bar.darker { --l: 10% }
</style>
