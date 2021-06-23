<template>
  <v-data-table
    :headers="headers"
    :items="COSTS"
    item-key="name"
    class="elevation-2 cyan lighten-4"
    :search="search"
    :custom-filter="filterOnlyCapsText"
    :items-per-page="10"
  >
    <template v-slot:top>
      <v-text-field v-model="search" label="Search..." class="mx-4"></v-text-field>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["COSTS"]),
    headers() {
      return [
        {
          text: "#",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Date", value: "date" },
        {
          text: "Categories",
          value: "categories",
        },
        { text: "Value", value: "price" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLowerCase().includes(search.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>