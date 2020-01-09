<template>
  <Component
    :is="`h${level}`"
    :class="`font-light leading-tight text-${size}xl`"
  >
    <slot />
  </Component>
</template>
