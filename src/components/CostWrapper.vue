<template>
  <div class="home">
    <button class="add-cost" @click="showCost = !showCost">
      Add New Cost
      <span v-if="!showCost">+</span>
      <span v-else>-</span>
    </button>
    <div class="form">
      <InputCost v-if="showCost" />
    </div>
    <FilterInput />
    <CostsList />
    <Pagenation />
  </div>
</template>

<script>
import InputCost from "./InputCost";
import CostsList from "./CostsList";
import Pagenation from "./Pagenation";
import FilterInput from "./Filter";

export default {
  name: "CostWrapper",
  data() {
    return {
      showCost: true,
    };
  },
  components: {
    InputCost,
    CostsList,
    Pagenation,
    FilterInput,
  },
};
</script>
<style lang="scss">
.form {
  height: 100px;
}
</style>
