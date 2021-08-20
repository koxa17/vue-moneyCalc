import { createStore } from "vuex";
import {getAllData} from "../api/api";

export default createStore({
  state: {
    all_operations: {},
    income: {},
    cost: {}
  },
  mutations: {
    SET_OPERATIONS_TO_STATE: (state, payload) => {
      state[payload.stateName] = payload.value
    }
  },
  actions: {
    async GET_ALL_JOURNAL_FOR_FIREBASE({commit}) {
      const operations = await getAllData()
      commit('SET_OPERATIONS_TO_STATE', {stateName: 'all_operations', value: operations.message})
    },
  },
  modules: {},
  getters: {
    GET_ALL_JOURNAL(state) {
      console.log(state.all_operations)
      return state.all_operations
    },
    GET_LIST_INCOMES(state, getters) {
      // console.log(state)
      return getters.state
    },
    GET_LIST_COSTS(state, getters) {
      // console.log(state)
      return getters.state
    }
  }
});
