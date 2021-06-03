<template>
  <div class="home">
    <button class="add-cost" @click="showCost = !showCost">
      Add New Cost
      <span v-if="!showCost">+</span>
      <span v-else>-</span>
    </button>
    <InputCost v-if="showCost" />
    <CostsList />
  </div>
</template>

<script>
import InputCost from "../components/InputCost";
import CostsList from "../components/CostsList";

export default {
  name: "Home",
  data() {
    return {
      showCost: true,
    };
  },
  components: {
    InputCost,
    CostsList,
  },
};
</script>
<style lang="scss">
.add-cost {
  background: rgb(57, 202, 142);
  padding: 0.2rem 1rem;
  border: 1px solid rgb(67, 192, 119);
  font-size: 1rem;

  &:active {
    transform: scale(0.9);
  }
}
</style>
