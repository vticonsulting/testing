<template>
  <div class="font-light text-white">
    <span class="block eyebrow text-xs tracking-wider font-mono">
      <!-- <span class="uppercase font-bold">Codename</span>&mdash; -->
      <!-- <b class="uppercase">{{ $appEyebrow }}</b> -->
      <span class="uppercase"><span class="font-black">@</span><span class="text-yellow-500">victortolbert</span><span class="font-black">/frontier</span></span>
    </span>
    <h1 class="leading-tight font-light text-xl md:text-2xl lg:text-3xl shadow">
      {{ $appName }}
    </h1>
    <h2 class="hidden md:block md:text-xs tracking-wide uppercase text-gray-100 font-medium">
      {{ $appTagline }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ProgramName',
}
</script>
