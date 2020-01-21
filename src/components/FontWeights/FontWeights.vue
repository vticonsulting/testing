<template>
  <div class="bg-white p-4 font-sans">
    <!-- 100 Hairline -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-hairline
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-hairline text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 200 Thin -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-thin
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-thin text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 300 Light -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-light
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-light text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 400 Normal -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-normal
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-normal text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 500 Medium -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-medium
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-medium text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 600 Semibold -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-semibold
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-semibold text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 700 Bold -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-bold
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-bold text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 800 Extrabold -->
    <div class="mb-6">
      <p class="text-sm text-gray-600">
        .font-extrabold
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-extrabold text-xl text-gray-800">
        {{ sampleText }}
      </p>
    </div>
    <!-- 900 Black -->
    <div>
      <p class="text-sm text-gray-600">
        .font-black
      </p>
      <p :class="{ uppercase: isUppercase }" class="font-black text-xl text-gray-800">
        Get Started With Coding
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontWeights',
  data: () => ({
    isUppercase: true,
    sampleText: 'Get Started With Coding',
  }),
}
</script>
