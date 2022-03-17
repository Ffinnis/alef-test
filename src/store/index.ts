import Vue from "vue";
import Vuex from "vuex";
import { userData } from "@/interface/user-data.interface";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {} as userData,
  },
  mutations: {
    setUserData(state, data: userData) {
      return (state.userData = data);
    },
  },
  actions: {
    setUserData({ commit }, data: userData) {
      return commit("setUserData", data);
    },
  },
  modules: {},
});
