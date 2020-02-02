<template>
  <span>Week: {{ week }},  getWeek: {{ getWeek }}, getWeekYear: {{ getWeekYear }}</span>
</template>

<script>
import getWeek from 'date-fns/getWeek'

export default {
  name: 'Week',
  props: {
    isoDate: {
      type: Date,
      default: () => new Date(),
    },
  },
  computed: {
    week () {
      return getWeek(new Date(this.isoDate.getTime()), {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
      })
    },
    // Returns the ISO week of the date.
    getWeek () {
      var date = new Date(this.isoDate.getTime())
      date.setHours(0, 0, 0, 0)
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
      // January 4 is always in week 1.
      var week1 = new Date(date.getFullYear(), 0, 4)
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return 1 + Math.round(
        (
          (date.getTime() - week1.getTime()) / 86400000 - 3 +
          (week1.getDay() + 6) % 7
        ) / 7
      )
    },
    // Returns the four-digit year corresponding to the ISO week of the date.
    getWeekYear () {
      var date = new Date(this.isoDate.getTime())
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
      return date.getFullYear()
    },
  },
}
</script>
