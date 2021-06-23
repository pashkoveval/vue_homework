<template>
  <div class="input-cost">
    <form>
      <label>
        Date
        <input type="date" v-model="date" />
      </label>
      <label>
        Category
        <select v-model="category">
          <option value></option>
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
import { mapGetters, mapActions  } from "vuex";
export default {
  data() {
    return {
      date: "",
      category: "",
      value: null,
    };
  },
  methods: {
    ...mapActions(["SET_NEW_COST_IN_COSTS_ACTION"]),

    sendNewCost() {
      const { date, category, value } = this;
      if ((date, category, value)) {
        this.SET_NEW_COST_IN_COSTS_ACTION({ date, category, value });
      }
      this.date = "";
      this.category = "";
      this.value = null;
    },
  },
  computed: {
    ...mapGetters(["GET_OPTIONS", "POPULAR_COSTS"]),
  },
  watch: {
    $route() {
      this.POPULAR_COSTS.forEach((el) => {
        if (this.$route.params.id === el.name) {
          let d = new Date();
          let curr_date = d.getDate();
          let curr_month = d.getMonth() + 1;
          let curr_year = d.getFullYear();
          let zero = "";
          let zero2 = "";
          if (curr_month < 10) {
            zero = 0;
          }
          if (curr_date < 10) {
            zero2 = 0;
          }
          let realDate =
            curr_year + "-" + zero + curr_month + "-" + zero2 + curr_date;
          this.date = realDate;
          if (this.$route.params.id) {
            this.category = this.$route.params.id.toString();
          }
          if (this.$route.query.value) {
            this.value = this.$route.query.value;
          }
          this.sendNewCost();
        }
      });
    },
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