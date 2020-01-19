<template>
  <div class="w-96 bg-gray-100 shadow-lg border rounded">
    <b-Table
      class="foo"
      ref="participants-table"
      :data="isEmpty ? [] : data"
      :loading="isLoading"
      focusable
      mobile-cards
      :checkable="false"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="id"
      @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.first_name}`)"
      :show-detail-icon="showDetailIcon"
      default-sort="first_name"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-TableColumn field="first_name" label="First Name" sortable searchable>
          <a
            @click="toggle(props.row)"
            class="underline text-blue-500 hover:text-blue-600"
          >{{ props.row.first_name }}</a>
        </b-TableColumn>

        <b-TableColumn field="last_name" label="Last Name" sortable searchable>
          {{ props.row.last_name }}
        </b-TableColumn>
      </template>

      <!-- Top Left Slot -->
      <template slot="top-left">
        Top Left
      </template>

      <!-- Bottom Left Slot -->
      <template slot="bottom-left">
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>

      <!-- Detail Slot -->
      <template slot="detail" slot-scope="props">
        <article class="">
          <div class="flex items-center w-full">
            <p>{{ props.row.first_name }}, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </article>
      </template>

      <!-- Blank State Slot -->
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-Table>
  </div>
</template>

<script>
import data from '../../../public/api/data.json'

export default {
  name: 'DemoTable',
  data () {
    const columns = [
      {
        field: 'id',
        label: 'ID',
        width: '40',
        numeric: true,
        searchable: true,
      },
      {
        field: 'first_name',
        label: 'First Name',
        searchable: true,
      },
      {
        field: 'last_name',
        label: 'Last Name',
      },
    ]

    return {
      columns,
      data: data.users[0].participants,
      selected: data.users[0].participants[1],
      checkedRows: [],
      defaultOpenedDetails: [1],
      showDetailIcon: false,
      currentPage: 1,
      perPage: 5,
      isEmpty: false,
      isLoading: false,
    }
  },
  methods: {
    toggle (row) {
      this.$refs['participants-table'].toggleDetails(row)
    },
  },
  metaInfo: {
    // title: 'My Awesome Webapp',
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
}
</script>
