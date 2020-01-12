<template>
  <div
    class="flex items-center mb-4 p-4 bg-blue-100 text-blue-700 font-semibold shadow"
  >
    <!-- Help Circle -->
    <svg
      class="h-8 w-8 mr-2 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line
        x1="12"
        y1="17"
        x2="12.01"
        y2="17"
      />
    </svg>
    <span>
      You can find helpful information when you see boxes like this
    </span>
  </div>
</template>

<script>
// <div
//   class="flex items-center mb-4 p-4 bg-red-100 text-red-700 font-semibold shadow"
// >
//   <!-- Alert Octagon -->
//   <svg
//     class="h-8 w-8 mr-2 stroke-current stroke-2 transform duration-500 ease-in-out"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   >
//     <path
//       d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
//     />
//     <line x1="12" y1="9" x2="12" y2="13" />
//     <line x1="12" y1="17" x2="12.01" y2="17" />
//   </svg>
//   <span>
//     You can find helpful information when you see boxes like this
//   </span>
// </div>
export default {
  name: 'Message',
}
</script>
