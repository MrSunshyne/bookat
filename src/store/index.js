import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
  },
  mutations: {
    login(state, {
      token,
      user,
    }) {
      state.token = token;
      state.user = user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
  getters: {
    authenticated: state => !!state.token,
  },
});

export default store;
