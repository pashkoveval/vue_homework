<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn :disabled="page <= 1" @click="page--">&lt;</v-btn>
      </v-col>
      <v-col v-for="(pageNumber,i) in pages" :key="i" @click="page = pageNumber">
        <v-btn>{{pageNumber}}</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="page++" :disabled="page == pages.length">&gt;</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  methods: {
    ...mapMutations(["PAGINATION", "FILTER_COSTS"]),
    ...mapActions(["FILTRATION"]),
    setPages() {
      let numberOfPages = Math.ceil(this.COSTS.length / this.perPage);
      this.pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate() {
      let { page, perPage } = this;
      let from = page * perPage - perPage;
      let to = page * perPage;
      this.FILTRATION({ from, to });
    },
  },
  watch: {
    COSTS_LIST() {
      this.setPages();
    },
    page() {
      this.paginate();
    },
  },
  computed: {
    ...mapGetters(["COSTS_LIST", "COSTS"]),
  },
  mounted() {
    this.paginate();
    console.log(this.$vuetify.theme.themes);
  },
};
</script>

<style lang="scss">
</style>