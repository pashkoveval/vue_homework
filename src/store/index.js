import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costs: [
      { idx: 1, "date": "2020-03-20", "category": "Food", "value": 169 },
      { idx: 2, "date": "2020-03-20", "category": "Food", "value": 169 },
      { idx: 3, "date": "2020-03-20", "category": "Navigation", "value": 50 },
      { idx: 4, "date": "2020-03-20", "category": "Navigation", "value": 50 },
      { idx: 5, "date": "2020-03-20", "category": "Sport", "value": 450 },
      { idx: 6, "date": "2020-03-20", "category": "Sport", "value": 450 },
      { idx: 7, "date": "2020-03-20", "category": "Navigation", "value": 350 },
      { idx: 8, "date": "2020-03-20", "category": "Navigation", "value": 350 },
      { idx: 9, "date": "2020-03-20", "category": "Sport", "value": 2450 },
      { idx: 10, "date": "2020-03-20", "category": "Sport", "value": 2450 },
      { idx: 12, "date": "2020-03-20", "category": "Travels", "value": 1450 },
      { idx: 13, "date": "2020-03-20", "category": "Travels", "value": 1450 },
      { idx: 14, "date": "2020-03-20", "category": "Phone", "value": 150 },
      { idx: 15, "date": "2020-03-20", "category": "Travels", "value": 1450 },
    ],
    feltredCosts: [],
    options: ["Food", "Navigation", "Sport", "Travels", "Phone"],
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
    },
    DELETE_COST_FROM_COSTS: (state, i) => {
      state.costs.splice(i, 1)
    },
    FILTER_COSTS: (state, { value, from = 0, to = 5, costToDel = null }) => {
      if (value) {
        state.feltredCosts = [...state.costs.filter(el => el.category.toUpperCase().includes(value.toUpperCase())).slice(from, to).splice(costToDel, 1)]
      } else {
        state.feltredCosts = [...state.costs]
        state.feltredCosts = [...state.feltredCosts.slice(from, to)]
      }
    },

  },
  actions: {
    SET_NEW_COST_IN_COSTS_ACTION: ({ commit }, cost) => {
      commit("SET_NEW_COST_IN_COSTS", cost);
    },
    FILTRATION: ({ commit }, obj) => {
      commit("FILTER_COSTS", obj);
    }

  },
  getters: {
    GET_OPTIONS: state => {
      return state.options;
    },
    COSTS_LIST: state => {
      return state.feltredCosts;
    },
    COSTS: state => {
      return state.costs;
    },
    POPULAR_COSTS: state => {
      return state.popularCosts
    },
  }
})
