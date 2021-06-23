<template>
  <v-app-bar app color="blue lighten-1">
    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/dashboard" text>Dashboard</v-btn>
    <v-btn to="/about" text>About</v-btn>
    <v-spacer></v-spacer>
    <v-switch class="m-auto" inset></v-switch>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>