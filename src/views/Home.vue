<template>
  <section class="w-full h-screen flex items-start md:items-center justify-center border">
    <div class="border shadow w-full mx-auto max-w-2xl">
      <DemoChart />
    </div>
    <!-- <FindOrAddFruit /> -->

    <!-- <div class="flex">
      <FacebookIcon />
      <TwitterIcon />
      <PinterestIcon />
      <InstagramIcon />
      <Bars
        :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        :gradient="['#6fa8dc', '#42b983']"
      />
      <Trend
        :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
      />
    </div> -->
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      options: {},
      series: [44, 55, 41, 17, 15],
    }
  },
  metaInfo: {
    // title: 'My Awesome Webapp',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
}
</script>
