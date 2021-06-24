<template>
  <v-container class="mx-auto overflow-hidden pa-0" fluid>
    <v-app-bar color="yellow lighten-4">

      <v-app-bar-nav-icon class="shows-md-and-down" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Monitoring spending</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down ml-auto">
        <v-btn color="cyan " outlined to="/">Home</v-btn>
        <v-btn class="ml-1 mr-1" outlined color="cyan en-4" to="/dashboard/list">Dashboard</v-btn>
        <v-btn color="cyan" outlined to="/about">About</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="cyan--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-help-box</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/dashboard/list">
            <v-list-item-icon>
              <v-icon>mdi-currency-usd</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>
