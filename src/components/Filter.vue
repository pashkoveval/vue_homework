<template>
  <div>
    <input type="text" placeholder="Serch by Category..." v-model="value" @input="filterFunc" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapMutations(["FILTER_COSTS"]),
    filterFunc() {
      this.FILTER_COSTS(this.value);
    },
  },
  computed: {
    ...mapGetters(["COSTS_LIST"]),
  },
  mounted() {
    this.filterFunc();
  },
};
</script>

<style lang="scss">
</style>