<template>
  <vue-frappe
    id="test"
    :labels="[
      'Winter', 'Spring', 'Summer', 'Fall',
    ]"
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
        name: 'Pledges',
        chartType: 'bar',
        values: [25, 40, 30, 35],
      },
      {
        name: 'Shares',
        chartType: 'bar',
        values: [25, 50, 27, 33],
      },
      {
        name: 'Trend',
        chartType: 'line',
        values: [15, 20, 20, 30],
      }],
    }
  },
}
</script>
