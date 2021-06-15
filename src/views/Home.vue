<template>
  <div class="home">
    <h2>Most popular spending</h2>
    <div class="links">
      <router-link
        class="qlink"
        v-for="({name,value},i) in POPULAR_COSTS"
        :key="i"
        :to="`/add/payment/${name}?value=${value}`"
      >{{name}} {{value}}$</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["POPULAR_COSTS"]),
  },
};
</script>
<style lang="scss">
.add-cost {
  background: rgb(57, 202, 142);
  padding: 0.2rem 1rem;
  border: 1px solid rgb(67, 192, 119);
  font-size: 1rem;

  &:active {
    transform: scale(0.9);
  }
}

.links {
  display: flex;
  justify-content: center;
}

.qlink {
  display: block;
  width: 100px;
  height: 30px;
  border: 1px solid rgb(149, 247, 84);
  background: rgb(149, 247, 84);
  margin: 1rem;
  line-height: 30px;
  text-decoration: none;
  color: inherit;
}
</style>
