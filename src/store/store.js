import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import actions from "./actions/index";
import mutations from "./mutations/index";
import getters from "./getters/index";

export default new Vuex.Store({
  state: {},
  getters,
  actions,
  mutations
});
