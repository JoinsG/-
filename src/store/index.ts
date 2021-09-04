import Vue from "vue";
import Vuex from "vuex";
import User from "./user.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:2
  },
  getters:{
    count(state){
      return state.count
    }
  },
  mutations: {},
  actions: {},
  modules: { User },
});
