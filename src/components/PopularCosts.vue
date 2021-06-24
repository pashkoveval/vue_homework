<template>
  <v-container class="pa-5">
    <v-row>
      <v-btn
        class="ma-1"
        color="green accent-3"
        outlined
        v-for="({name,value},i) in POPULAR_COSTS"
        :key="i"
        :to="`/dashboard/${name}?value=${value}`"
      >{{name}} {{value}}$</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["POPULAR_COSTS"]),
  },
};
</script>

<style lang="scss" scoped>
</style>