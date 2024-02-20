import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import DATA from "./data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Data: DATA,
  },
  getters: {
    getCrew(state) {
      return state.Data.crew;
    },
    getDestination(state) {
      return state.Data.destinations;
    },
    getTechnology(state) {
      return state.Data.technology;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
