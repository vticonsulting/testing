<template>
  <div class="font-light text-white">
    <span class="block eyebrow text-xs tracking-wider font-mono">
      <!-- <span class="uppercase font-bold">Codename</span>&mdash; -->
      <b class="uppercase">{{ $appEyebrow }}</b>
    </span>
    <h1 class="leading-tight font-light text-xl md:text-2xl lg:text-3xl shadow">
      {{ $appName }}
    </h1>
    <h2 class="md:text-xl lg:text-sm text-gray-400 font-light">
      {{ $appTagline }}...
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ProgramName',
}
</script>
