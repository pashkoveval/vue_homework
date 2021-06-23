<template>
  <div>
    <tr class="title-cost">
      <td>#</td>
      <td>Date</td>
      <td>Category</td>
      <td>Value</td>
    </tr>
    <tr class="cost" v-for="({date,category,value},i) in COSTS_LIST" :key="i">
      <td>{{i+1}}</td>
      <td>
        <input type="date" :value="date" disabled />
      </td>
      <td>
        <select v-model="COSTS_LIST[i].category" disabled>
          <option
            :selected="category"
            v-for="option in GET_OPTIONS"
            :key="option"
            :value="option"
          >{{option}}</option>
        </select>
      </td>
      <td>
        <input type="number" :value="value" disabled />
      </td>
      <button class="del" @click="deleteCost(i)">&#9249;</button>
    </tr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "#",
          align: "start",
          sortable: true,
          value: "idx",
        },
        { text: "Date", value: "date" },
        { text: "Category", value: "category" },
        { text: "Value", value: "value" },
      ],
    };
  },
  methods: {
    deleteCost(costToDel) {
      this.FILTRATION({ costToDel });
    },
    setData() {},
  },
  computed: {
    ...mapGetters(["COSTS_LIST", "GET_OPTIONS", "COSTS"]),
    ...mapActions(["FILTRATION"]),
  },
};
</script>

<style lang="scss">
.title-cost {
  background: rgb(223, 222, 222);
}
td {
  width: 150px;
  padding: 1rem;
  & input,
  & select {
    background: none;
    border: none;
    font-size: 1rem;
    text-align: center;
  }
  & select:disabled {
    color: #000;
  }
}
.cost {
  &:hover {
    cursor: pointer;
    background: rgb(245, 245, 245);
    .del {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }
  }
}
.del {
  transform: translateX(-100%);
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  border: none;
  margin-right: 1rem;
  background: rgb(245, 210, 210);
  &:hover {
    background: rgb(245, 185, 185);
  }
}
</style>