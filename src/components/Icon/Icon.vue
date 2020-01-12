<template>
  <div class="flex">
    <!-- Chevron up -->
    <button
      class="border-4 rounded-full focus:outline-none transform hover:translate-x-2 duration-500"
    >
      <svg
        class="h-8 w-8 stroke-current stroke-2 transform rotate-90 duration-500 ease-in-out"
        viewBox="0 0 24 24"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
    <!-- X -->
    <svg
      class="h-8 w-8 stroke-current stroke-2 transform rotate-180 hover:rotate-0 duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
    <!-- Bars -->
    <svg
      class="h-8 w-8 stroke-current stroke-2 transform rotate-180 hover:rotate-0 duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
    <!-- Bell -->
    <svg
      class="h-8 w-8 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
    <!-- Alert Triangle -->
    <svg
      class="h-8 w-8 text-orange-500 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
    <!-- Alert Circle -->
    <svg
      class="h-8 w-8 text-blue-500 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <!-- Arrow Up -->
    <svg
      class="h-8 w-8 text-blue-500 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
    <!-- More Vertical -->
    <svg
      class="h-8 w-8 text-blue-500 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
    <!-- Facebook -->
    <svg
      class="h-8 w-8 text-blue-500 stroke-current stroke-2 transform duration-500 ease-in-out"
      viewBox="0 0 24 24"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      />
    </svg>
  </div>
</template>
