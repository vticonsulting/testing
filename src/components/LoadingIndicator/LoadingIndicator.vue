<template>
  <svg width="55" height="80" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" :fill="color" :stroke="color">
    <template v-if="variant === 'audio'">
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect width="10" height="20" rx="3">
          <animate attributeName="height"
                   begin="0s" dur="4.3s"
                   values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
                   repeatCount="indefinite"
          />
        </rect>
        <rect x="15" width="10" height="80" rx="3">
          <animate attributeName="height"
                   begin="0s" dur="2s"
                   values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
                   repeatCount="indefinite"
          />
        </rect>
        <rect x="30" width="10" height="50" rx="3">
          <animate attributeName="height"
                   begin="0s" dur="1.4s"
                   values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear"
                   repeatCount="indefinite"
          />
        </rect>
        <rect x="45" width="10" height="30" rx="3">
          <animate attributeName="height"
                   begin="0s" dur="2s"
                   values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
                   repeatCount="indefinite"
          />
        </rect>
      </g>
    </template>
    <template v-else>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </template>
  </svg>
</template>

<script>
export default {
  name: 'LoadingIndicator',
  props: {
    variant: {
      type: String,
      default: 'three-dots',
      validator: function (value) {
        // Should return true if value is valid
      },
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {

  },
}
</script>
