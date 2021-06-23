import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');

const url = 'https://602c2a0730ba720017222bc0.mockapi.io/goods';

export default new Vuex.Store({
  state: {
    costs: [],
    popularCosts: [
      {
        name: 'Music',
        value: 169.00
      },
      {
        name: 'Movies',
        value: 450.00
      },
      {
        name: 'Games',
        value: 1450.00
      },
    ],
    categories: [],
    total: null
  },

  mutations: {

    SET_COSTS_TO_COSTS_ARRY: (state, cost) => {
      let sum = 0;
      state.costs = [...cost]
      state.costs.forEach(el => {
        el.date = el.date.substr(0, 10);
        el.price = Number(el.price)
        sum += el.price;
      })
      state.total = sum
    },

    SET_CATEGORIES: (state, categories) => {
      state.categories = [...new Set(categories.map(a => a.categories))]
    },

    SET_NEW_COST_IN_COSTS: (state, cost) => {
      cost.id = state.costs.length + 1
      state.costs.push(cost);
      let sum = 0;
      state.costs.forEach(el => {
        sum += el.price;
      })
      state.total = sum
    },
  },
  actions: {

    GET_COSTS_FROM_API: ({ commit }) => {
      return axios(url, {
        method: "GET"
      })
        .then(cost => {
          commit("SET_CATEGORIES", cost.data);
          commit("SET_COSTS_TO_COSTS_ARRY", cost.data);
          return cost.data;
        })
        .catch(e => {
          console.log(e);
          return e;
        });
    },

    SET_NEW_COST_IN_COSTS_ACTION: ({ commit }, cost) => {
      commit("SET_NEW_COST_IN_COSTS", cost);
    },

  },
  getters: {
    POPULAR_COSTS: (state) => {
      return state.popularCosts
    },
    CATEGORIES: (state) => {
      return state.categories
    },
    COSTS: (state) => {
      return state.costs
    },
    TOTAL_COSTS: (state) => {
      return state.total
    }
  }
})
