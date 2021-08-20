import { createStore } from "vuex";
import {getAllData} from "../api/api";

export default createStore({
  state: {
    accounting_journal: {}
  },
  mutations: {
    SET_OPERATIONS_TO_STATE: (state, journal) => {
      state.accounting_journal = journal
    }
  },
  actions: {
    async GET_ALL_JOURNAL({commit}) {
      const journal = await getAllData()
      commit('SET_OPERATIONS_TO_STATE', journal.message)
    }
  },
  modules: {},
});
