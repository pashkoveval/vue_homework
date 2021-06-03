import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costs: [
      { "date": "2020-03-20", "category": "Food", "value": 169 },
      { "date": "2020-03-20", "category": "Navigation", "value": 50 },
      { "date": "2020-03-20", "category": "Sport", "value": 450 },
      { "date": "2020-03-20", "category": "Navigation", "value": 350 },
      { "date": "2020-03-20", "category": "Sport", "value": 2450 },
      { "date": "2020-03-20", "category": "Navigation", "value": 1450 },
    ],
    options: ["Food", "Navigation", "Sport", "Travels"]
  },
  mutations: {
    SET_NEW_COST_IN_COSTS: (stete, cost) => {
      stete.costs.push(cost);
    },
    DELETE_COST_FROM_COSTS: (stete, i) => {
      stete.costs.splice(i, 1)
    }
  },
  actions: {
  },
  getters: {
    GET_OPTIONS: state => {
      return state.options;
    },
    COSTS_LIST: state => {
      return state.costs;
    }
  }
})
