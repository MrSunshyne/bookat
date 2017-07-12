import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import router from '@/router';

import firebase from '@/common/firebase';

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
  actions: {

    LOGIN(context, {
      token,
      user,
    }) {
      context.commit('login', {
        token,
        user,
      });
      router.push('/home');
    },

    LOGOUT(context) {
      context.commit('logout');
      firebase.auth().signOut();
      router.push('/login');
    },

  },
  getters: {
    authenticated: state => !!state.token,
  },
});

export default store;
