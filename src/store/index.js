import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import router from '@/router';

import { firebase } from '@/common/firebase';
import { normalizeFirebaseUserProfile } from '@/common/auth';

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({

  plugins: [createPersistedState()],

  state: {
    user: null,
  },

  mutations: {

    login(state, {
      user,
    }) {
      state.user = user;
    },

    logout(state) {
      state.user = null;
    },

    profile(state, {
      user,
    }) {
      state.user = user;
    },

  },

  actions: {

    AUTH_LOGIN(context, {
      user,
    }) {
      context.commit('login', {
        user,
      });
      router.push('/home');
    },

    AUTH_LOGOUT(context) {
      context.commit('logout');
      firebase.auth().signOut();
      router.push('/login');
    },

    AUTH_RELOAD(context) {
      firebase.auth().currentUser.reload().then(() => {
        const user = normalizeFirebaseUserProfile(firebase.auth().currentUser);
        context.commit('profile', {
          user,
        });
      });
    },
  },

  getters: {
    dev: () => !!location.port,
    authenticated: state => !!state.user,
  },

});

export default store;
