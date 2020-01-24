<template>
  <div>
    <div class="flex items-center">
      <div class="relative text-gray-600 focus-within:text-gray-500">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon class="w-4 h-4" />
        </span>
        <input type="text" class="h-9 pl-10 text-sm rounded-md text-white focus-within:text-gray-600  bg-gray-900 focus:outline-none focus:bg-white">
      </div>
    </div>
    <!-- <ais-InstantSearch>
      <ais-SearchBox />

      <ais-Hits>
        <template slot="item" scope="{ item }">
          <h2>{{ item.company }}</h2>
          <p>{{ item.firstname }} {{ item.lastname }}</p>
        </template>
      </ais-Hits>

      <ais-RefinementList attribute="company" />

      <ais-Pagination />
    </ais-InstantSearch> -->
  </div>

</template>

<script>
export default {
  name: 'SearchForm',
}
</script>
