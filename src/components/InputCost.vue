<template>
  <div class="input-cost">
    <form>
      <label>
        Date
        <input type="date" v-model="date" />
      </label>
      <label>
        Category
        <select v-model="category"  placeholder="Category">
          <option v-for="(option, i) in GET_OPTIONS" :key="i" :value="option">{{option}}</option>
        </select>
      </label>
      <label>
        Value
        <input type="number" min="1" v-model.number="value" />
      </label>
      <button @click.prevent="sendNewCost" @keyup.enter="sendNewCost">Send</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      date: "",
      category: "",
      value: null,
    };
  },
  methods: {
    ...mapMutations(["SET_NEW_COST_IN_COSTS"]),

    sendNewCost() {
      const { date, category, value } = this;
      if ((date, category, value)) {
        this.SET_NEW_COST_IN_COSTS({ date, category, value });
      }
      this.date = "";
      this.category = "";
      this.value = null;
    },
  },
  computed: {
    ...mapGetters(["GET_OPTIONS"]),
  },
};
</script>

<style lang="scss">
.input-cost {
  padding: 2rem;
  & input,
  & select {
    width: 150px;
    height: 30px;
  }
  & select {
    height: 35px;
  }
  & form {
    margin: 0 auto;
    width: 900px;
    display: flex;
    justify-content: space-between;
  }
}
</style>