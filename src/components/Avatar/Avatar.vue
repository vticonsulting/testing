<template>
  <img
    :alt="alt"
    :src="src"
    class="w-16 h-16 elevation-0 border-2 border-gray-300 rounded-full bg-white"
  >
</template>

<script>
import imageFile from '../../../public/avatar.svg'

const image = {
  src: imageFile,
  alt: 'my image',
}

export default {
  name: 'BaseAvatar',
  status: 'prototype',
  release: '1.0.0',
  props: {
    alt: {
      type: String,
      default: image.alt,
    },
    src: {
      type: String,
      default: image.src,
    },
  },
}
</script>
