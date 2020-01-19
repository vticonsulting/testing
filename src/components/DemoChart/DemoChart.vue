<template>
  <vue-frappe
    id="test"
    :labels="[
      '12am-3am', '3am-6am', '6am-9am', '9am-12pm',
      '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am'
    ]"
    title="Demo Chart"
    type="axis-mixed"
    :height="300"
    :colors="['#38a169', '#3182ce', 'light-blue']"
    :data-sets="data"
  />
</template>
<script>
export default {
  name: 'DemoChart',
  data () {
    return {
      data: [{
        name: 'Enter Pledge',
        chartType: 'bar',
        values: [25, 40, 30, 35, 8, 52, 17, -4],
      },
      {
        name: 'View Rewards',
        chartType: 'bar',
        values: [25, 50, -10, 15, 18, 32, 27, 14],
      },
      {
        name: 'Yet Another',
        chartType: 'line',
        values: [15, 20, -3, -15, 58, 12, -17, 37],
      }],
    }
  },
}
</script>
