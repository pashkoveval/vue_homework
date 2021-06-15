import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costs: [
      { "date": "2020-03-20", "category": "Food", "value": 169 },
      { "date": "2020-03-20", "category": "Food", "value": 169 },
      { "date": "2020-03-20", "category": "Navigation", "value": 50 },
      { "date": "2020-03-20", "category": "Navigation", "value": 50 },
      { "date": "2020-03-20", "category": "Sport", "value": 450 },
      { "date": "2020-03-20", "category": "Sport", "value": 450 },
      { "date": "2020-03-20", "category": "Navigation", "value": 350 },
      { "date": "2020-03-20", "category": "Navigation", "value": 350 },
      { "date": "2020-03-20", "category": "Sport", "value": 2450 },
      { "date": "2020-03-20", "category": "Sport", "value": 2450 },
      { "date": "2020-03-20", "category": "Travels", "value": 1450 },
      { "date": "2020-03-20", "category": "Travels", "value": 1450 },
    ],
    feltredCosts: [],
    options: ["Food", "Navigation", "Sport", "Travels"],
    popularCosts: [
      {
        name: 'Food',
        value: 50
      },
      {
        name: 'Sport',
        value: 20
      },
      {
        name: 'Travels',
        value: 200
      },
    ]
  },
  mutations: {
    SET_NEW_COST_IN_COSTS: (state, cost) => {
      state.costs.push(cost);
      state.feltredCosts = state.costs;
    },
    DELETE_COST_FROM_COSTS: (state, i) => {
      state.costs.splice(i, 1)
    },
    FILTER_COSTS: (state, filterValue) => {
      if (filterValue) {
        state.feltredCosts = state.costs.filter(el => el.category.toUpperCase().includes(filterValue.toUpperCase()))
      } else {
        state.feltredCosts = state.costs;
      }
    },
    PAGINATION: (state, { from, to }) => {
      state.costs.slice(from, to)
      console.log("Vuex", from, to);
    }
  },
  actions: {
    SET_NEW_COST_IN_COSTS_ACTION: ({ commit }, cost) => {
      commit("SET_NEW_COST_IN_COSTS", cost);
    }
  },
  getters: {
    GET_OPTIONS: state => {
      return state.options;
    },
    COSTS_LIST: state => {
      return state.feltredCosts;
    },
    POPULAR_COSTS: state => {
      return state.popularCosts
    },
  }
})
