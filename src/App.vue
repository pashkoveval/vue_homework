<template>
  <v-app>
    <Header/> 
    <v-spacer></v-spacer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>