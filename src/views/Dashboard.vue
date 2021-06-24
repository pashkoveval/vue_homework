<template>
  <v-container>
    <v-row justify="center" align="center" class="pt-10">
      <InputCost />
      <v-card-text class="ml-5 cyan--text text-lg-h1 text-md-h2">Total {{TOTAL_COSTS}} $</v-card-text>
    </v-row>

    <v-row class="pt-10" justify="center" align="center">
      <Table />
      <ChartPie />
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters } from "vuex";
import Table from "../components/Table.vue";
import ChartPie from "../components/ChartPie.vue";
import InputCost from "../components/InputCost.vue";

export default {
  name: "Dashboard",
  components: { Table, ChartPie, InputCost },

  computed: {
    ...mapGetters(["TOTAL_COSTS"]),
  },
};
</script>

<style lang="scss">
</style>