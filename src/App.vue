<template>
  <v-app>
    <Header />
    <v-main>
        <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header.vue";
export default {
  name: "myvuetify", 
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapActions(["GET_COSTS_FROM_API"]),
  },
  created() {
    this.GET_COSTS_FROM_API;
  },
};
</script>
