<template>
  <v-container>
    <v-row>
      <PopularCosts />
    </v-row>
  </v-container>
</template>

<script>
import PopularCosts from "../components/PopularCosts";

export default {
  name: "Home",
  components: {
    PopularCosts,
  },
};
</script>
