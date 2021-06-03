<template>
  <div class="nav">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav {
  padding: 30px;

  & a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>