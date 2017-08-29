// import { debugFactory } from '@/common/debug';

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import router from '@/router';

import { firebase } from '@/common/firebase';
import { getCurrentUserFromFirebase } from '@/common/auth';

// const debug = debugFactory('@/components/auth/Login');

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

    AUTH_LOGIN(context) {
      getCurrentUserFromFirebase().then((user) => {
        context.commit('login', {
          user,
        });
        router.push('/home');
      });
    },

    AUTH_LOGOUT(context) {
      context.commit('logout');
      firebase.auth().signOut();
      router.push('/login');
    },

    AUTH_REFRESH(context) {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        return;
      }
      currentUser.reload()
        .then(getCurrentUserFromFirebase)
        .then((user) => {
          context.commit('profile', {
            user,
          });
        });
    },
  },

  getters: {
    production: () => !location.port,
    authenticated: state => !!state.user,
  },

});

export default store;
