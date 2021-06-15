<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
* {
  transition: all 0.3s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
