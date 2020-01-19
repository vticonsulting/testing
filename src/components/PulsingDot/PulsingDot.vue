<template>
  <div class="flex">
    <div class="pulse green" />
    <div class="pulse yellow" />
    <div class="pulse red" />
  </div>
</template>

<script>
export default {
  name: 'PulsingDot',
}
</script>

<style>
.pulse {
  margin: 30px;
  width: 10px;
  height: 10px;
  background-color: #749a02;
  border-radius: 5px;
}
@-webkit-keyframes greenPulse {
  from {
    background-color: #749a02;
    -webkit-box-shadow: 0 0 9px #333;
  }
  50% {
    background-color: #91bd09;
    -webkit-box-shadow: 0 0 18px #91bd09;
  }
  to {
    background-color: #749a02;
    -webkit-box-shadow: 0 0 9px #333;
  }
}
div.pulse.green {
  -webkit-animation-name: greenPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes yellowPulse {
  from {
    background-color: #fc9200;
    -webkit-box-shadow: 0 0 9px #333;
  }
  50% {
    background-color: #ffb515;
    -webkit-box-shadow: 0 0 18px #ffb515;
  }
  to {
    background-color: #fc9200;
    -webkit-box-shadow: 0 0 9px #333;
  }
}
div.pulse.yellow {
  -webkit-animation-name: yellowPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes redPulse {
  from {
    background-color: #bc330d;
    -webkit-box-shadow: 0 0 9px #333;
  }
  50% {
    background-color: #e33100;
    -webkit-box-shadow: 0 0 18px #e33100;
  }
  to {
    background-color: #bc330d;
    -webkit-box-shadow: 0 0 9px #333;
  }
}
div.pulse.red {
  -webkit-animation-name: redPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}
</style>
