<template>
  <div id="app">
    <Header />
    <div class="content">
      <CostLine :costList="costList" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import CostLine from "./components/CostLine";
export default {
  name: "App",
  components: {
    Header,
    CostLine,
  },
  data() {
    return {
      costList: [
        {
          date: "12.12.2012",
          category: "Food",
          value: 123,
        },
        {
          date: "12.12.2012",
          category: "Transport",
          value: 2123,
        },
        {
          date: "12.12.2012",
          category: "Sports",
          value: 323,
        },
        {
          date: "12.12.2012",
          category: "Food",
          value: 13123,
        },
        {
          date: "12.12.2012",
          category: "Food",
          value: 13123,
        },
        {
          date: "12.12.2012",
          category: "Food",
          value: 13123,
        },
        {
          date: "12.12.2012",
          category: "Food",
          value: 13123,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 1rem;
}
</style>
