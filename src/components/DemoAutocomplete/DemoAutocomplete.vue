<template>
  <section>
    <p class="content">
      <b>Selected:</b> {{ selected }}
    </p>
    <b-Autocomplete
      v-model="name"
      class="form-input focus:outline-none"
      ref="autocomplete"
      :data="filteredDataArray"
      placeholder="e.g. Orange"
      @select="option => selected = option"
    >
      <template slot="footer">
        <a @click="showAddFruit">
          <span> Add new... </span>
        </a>
      </template>
      <template slot="empty">
        No results for {{ name }}
      </template>
    </b-Autocomplete>
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: [
        'Orange',
        'Apple',
        'Banana',
        'Pear',
        'Lemon',
        'Strawberry',
        'Kiwi',
      ],
      name: '',
      selected: null,
    }
  },
  computed: {
    filteredDataArray () {
      return this.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    },
  },
  methods: {
    showAddFruit () {
      this.$buefy.dialog.prompt({
        message: `Fruit`,
        inputAttrs: {
          placeholder: 'e.g. Watermelon',
          maxlength: 20,
          value: this.name,
        },
        confirmText: 'Add',
        onConfirm: (value) => {
          this.data.push(value)
          this.$refs.autocomplete.setSelected(value)
        },
      })
    },
  },
}
</script>
