<template>
  <!-- Video -->
  <div id="demo-video">
    <div class="holder" ref="playvid1" @click="playVideo()">
      <img src="/img/poster.jpg" id="still">
      <video controls ref="video">
        <source src="/mp4/movie.mp4" type="video/mp4"> Your browser does not support the video tag.
      </video>
      <div id="close" @click="remove">
        &times;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoVideo',
  data: () => ({
    isLoading: false,
    playing: false,
  }),
  methods: {
    playVideo () {
      if (!this.playing) {
        this.$refs.playvid1.classList.add('player')
        this.$refs.video.classList.add('appear')
        this.$refs.close.classList.add('appear')
        this.$refs.video.play()
        this.playing = true
      }
    },

    remove () {
      if (this.playing) {
        this.$refs.video.pause()
        this.$refs.video.classList.remove('appear')
        this.$refs.close.classList.remove('appear')

        this.$refs.playvid1.classList.remove('player')
        setTimeout(() => {
          this.playing = false
        }, 250)
      }
    },
  },
}

</script>
<style>
#demo-video {
  display: grid;
  width: 100%;
  height: 100%;
}

.holder {
  /* width: 100px; */
  margin: auto auto;
  transition: all 0.8s;
  overflow: hidden;
  position: relative;
  transform-origin: center center;
}

.holder img {
  max-width: 100%;
  transition: all 0.8s;
}

.holder img:hover {
  transform: scale(1.2, 1.2);
}

.player {
  width: 960px;
  height: 540px;
}

#video {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;
}

#close {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  background: #fff;
  border-radius: 50%;
  width: 30px;
  height: 25px;
  transition: opacity 0.5s;
  display: none;
  text-align: center;
  cursor: pointer;
  padding-top: 5px;
  z-index: 200;
}

.appear {
  display: block !important;
  opacity: 1 !important;
}
</style>
