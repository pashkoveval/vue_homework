<template>
  <div>
    <ul class="pagination">
      <li>
        <button>&lt;</button>
      </li>
      <li>
        <button
          v-for="num in costList.length"
          :key="num"
          @click="paginationFunc"
        >{{costList.length}}</button>
      </li>
      <li>
        <button>&gt;</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    costList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    paginationFunc() {
      this.costList.splice(5);
      console.log(this.costList);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  list-style-type: none;
  display: flex;
}
</style>