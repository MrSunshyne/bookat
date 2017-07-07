import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    login(state) {
      state.token = '123';
      state.user = {};
    },
    signup(state) {
      state.token = '123';
      state.user = {};
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});
