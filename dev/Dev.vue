<template>
  <ul style="margin: 0; padding: 0; width: 400px">
    <li v-for="(item, index) in items" :key="index">
      <a :href="item.url">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script>

// function first () {
//   data.first = el.getBoundingClientRect()
//   console.log('First: get initial position', data.first.left, 'px')
// }

export default {
  name: 'WebProjectsList',
  data: () => ({
    items: {
      cruds: { name: 'Cruds', url: 'http://cruds.test/' },
      pingcrm: { name: 'Laravel 6 Demo (pingcrm)', url: 'http://pingcrm.test/' },
      gasps: { name: 'GaSPS (Laravel)', url: 'http://ga-sps.test' },
      laravel6: { name: 'Laravel 6 Demo (laravel6)', url: 'http://laravel6.test/' },
      sandbox: { name: 'Sandbox (Laravel)', url: 'http://sandbox.test' },
      wordpress: { name: 'Wordpress Demo', url: 'http://wordpress.test/wp-admin' },
      demo: { name: 'Kirby Demo (demo)', url: 'http://demo.test/panel/login' },
      docs: { name: 'Kirby Demo (docs)', url: 'http://docs.test/panel/login' },
      nglaravel: { name: 'Laravel v5.8.35 (ng-laravel)', url: 'http://ng-laravel.test/' },
      kitchensink: { name: 'Kirby Demo (kitchensink)', url: 'http://kitchensink.test/panel/login' },
      getkirby: { name: 'Kirby Demo (getkirby)', url: 'http://getkirby.test' },
      grit: { name: 'Kirby Demo (grit)', url: 'http://grit.test/panel/login' },
      kb: { name: 'Kirby Demo (kb)', url: 'http://kb.test/panel/login' },
      oss: { name: 'OSS (kirby 3)', url: 'http://oss.test/panel/login' },
      sps: { name: 'SPS (kirby 3)', url: 'http://sps.test/panel/login' },
      titan: { name: 'Titan', url: 'http://titan.test' },
      vip: { name: 'VIP', url: 'http://vip.test' },
      vtisandbox: { name: 'VTi Sandbox', url: 'http://vti-sandbox.test' },
      victortolbert: { name: 'Victor Tolbert', url: 'http://victortolbert.test' },
      slds: { name: 'SLDS', url: 'http://slds.test/' },
      storybook: { name: 'Storybook', url: 'http://localhost:6006' },
      testing: { name: 'Testing', url: 'http://localhost:8080' },
      mockserver: { name: 'JSON Mock Server', url: 'http://localhost:3000' },

    },
  }),
  mounted () {
    console.log(this.$el.getBoundingClientRect())
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
