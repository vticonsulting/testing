<template>
  <div id="app" class="h-screen w-full transition-all duration-300">
    <p>Begin IE 11 Troubleshooting</p>
    <p>Add plugins</p>
    <p>plugins: bars, buefy, date-fns, feather-icons, global, portal, trend</p>
    <!-- <img :src="results[0].urls.thumb"> -->
    <div class="aspect-ratio-4/3">
      <img class="max-w-sm object-fit" :src="photo.urls.regular">
    </div>
  </div>
</template>

<script>
import Unsplash from 'unsplash-js'
const unsplash = new Unsplash({ accessKey: '00ad9b56c5998633216cab9393e30c6b97a6e3ba4bff0061c11b243c0144993f' })

export default {
  name: 'TestApp',
  data: () => ({
    results: [],
    photo: {},
  }),
  async mounted () {
    await unsplash.photos.getRandomPhoto({ username: 'naoufal' })
      .then(res => {
        res.json().then(json => {
          console.log(json)
          this.photo = json
        })
      })
  },
}
</script>
