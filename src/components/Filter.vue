<template>
  <div>
    <input type="text" placeholder="Serch by Category..." v-model="value" @input="filterFunc" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions(["FILTRATION"]),
    filterFunc() {
      this.FILTRATION({ value: this.value });
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