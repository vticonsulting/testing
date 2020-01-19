<template>
  <div id="holder" class="h-32 w-32 flex items-center justify-center">
    <!-- http://cssdeck.com/labs/css3-pulsating-dot -->
    <div class="dot absolute w-12 h-12 border-8 border-yellow-300 rounded-full bg-transparent" />
    <div class="pulse absolute w-3 h-3 border-1 rounded-full border-yellow-300" />
  </div>
</template>

<script>
export default {
  name: 'PulsatingDot',
}
</script>

<style lang="scss">
#holder {
  position: relative;
}
.pulse {
  background-color: #716f42;
  z-index: 90;
  left: 15px;
  top: 15px;
}
.dot {
  animation: pulse 3s ease-out;
  animation-iteration-count: infinite;
  top: -10px;
  left: -10px;
  z-index: 1;
  opacity: 0;
}

@-moz-keyframes pulse {
  0% {
    -moz-transform: scale(0);
    opacity: 0;
  }
  25% {
    -moz-transform: scale(0);
    opacity: 0.1;
  }
  50% {
    -moz-transform: scale(0.1);
    opacity: 0.3;
  }
  75% {
    -moz-transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    -moz-transform: scale(1);
    opacity: 0;
  }
}
@-webkit-keyframes "pulse" {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  25% {
    -webkit-transform: scale(0);
    opacity: 0.1;
  }
  50% {
    -webkit-transform: scale(0.1);
    opacity: 0.3;
  }
  75% {
    -webkit-transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
</style>
