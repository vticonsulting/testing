<template>
  <carousel
    autoplay
    autoplay-hover-pause
    :per-page="1"
    :navigate-to="currentSlide"
  >
    <slide
      data-index="0"
      data-name="MySlideName"
      @slideclick="handleSlideClick"
    >
      Slide 1 <a content="Hello" v-tippy="{ placement: 'top', arrow: true}">Content</a>
    </slide>
    <slide
      data-index="1"
      data-name="MySlideName"
      @slideclick="handleSlideClick"
    >
      Slide 2 Content
    </slide>
    <slide
      data-index="2"
      data-name="MySlideName"
      @slideclick="handleSlideClick"
    >
      Slide 3 Content
    </slide>
  </carousel>
</template>

<script>
export default {
  name: 'BaseCarousel',
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    handleSlideClick (dataset) {
      // console.log(dataset.index, dataset.name)
    },
  },
}
</script>
