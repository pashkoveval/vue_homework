<template>
  <div>
    <button :disabled="page <= 1" @click="page--">&lt;</button>
    <button v-for="(pageNumber,i) in pages" :key="i" @click="page = pageNumber">{{pageNumber}}</button>
    <button @click="page++" :disabled="page == pages.length">&gt;</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  methods: {
    ...mapMutations(["PAGINATION"]),
    setPages() {
      let numberOfPages = Math.ceil(this.COSTS_LIST.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate() {
      let { page, perPage } = this;
      let from = page * perPage - perPage;
      let to = page * perPage;
      // this.PAGINATION({ from, to });
      console.log("Компонент", from, to);
    },
  },
  watch: {
    COSTS_LIST() {
      this.setPages();
    },
  },
  computed: {
    ...mapGetters(["COSTS_LIST"]),
    displayedPosts() {
      return this.paginate();
    },
  },
  mounted() {
    this.paginate();
  },
};
</script>

<style lang="scss">
</style>