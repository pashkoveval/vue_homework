<template>
  <div>
    <tr class="titel">
      <td>#</td>
      <td>Date</td>
      <td>Category</td>
      <td>Value</td>
    </tr>
    <tr v-for="({category,date,value},i) in costList" :key="i">
      <td>{{i+1}}</td>
      <td>{{date}}</td>
      <td>{{category}}</td>
      <td>{{value}}</td>
    </tr>
    <div>
      <Pagination :costList="costList" />
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  components: { Pagination },
  props: {
    costList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.titel {
  td {
    width: 200px;
    background: rgb(223, 222, 222);
    padding: 0.5rem;
  }
}
tr:hover {
  background: rgb(241, 241, 241);
}
td {
  width: 200px;
  padding: 0.5rem;
  border-right: 1px solid rgb(223, 222, 222);
}
</style>