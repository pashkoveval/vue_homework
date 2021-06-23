<template>
  <v-container class="home">
    <v-col>
      <CostWrapper />
    </v-col>
  </v-container>
</template>

<script>
import CostWrapper from "../components/CostWrapper";

export default {
  name: "Dashboard",
  components: {
    CostWrapper,
  },
};
</script>

<style lang="scss" >
</style>