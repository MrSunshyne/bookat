// import { debugFactory } from '@/common/debug';

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import router from '@/router';

import { firebase } from '@/common/firebase';
import { getCurrentUserFromFirebase } from '@/common/auth';

// const debug = debugFactory('@/store');

Vue.use(Vuex);

/* eslint no-param-reassign: ["error", { "props": false }] */

const store = new Vuex.Store({

  plugins: [createPersistedState()],

  state: {
    loading: false,
    user: null,
    availableServices: [],
    myServices: [],
  },

  mutations: {

    LOADING(state, loading) {
      state.loading = loading;
    },

    LOGIN(state, {
      user,
    }) {
      state.user = user;
    },

    LOGOUT(state) {
      state.user = null;
    },

    PROFILE(state, {
      user,
    }) {
      state.user = user;
    },

  },

  actions: {

    login(context) {
      getCurrentUserFromFirebase().then((user) => {
        context.commit('LOGIN', {
          user,
        });
        router.push('/home');
      });
    },

    logout(context) {
      context.commit('LOGOUT');
      firebase.auth().signOut();
      router.push('/login');
    },

    reloadProfile(context) {
      const { currentUser } = firebase.auth();
      if (!currentUser) {
        return;
      }
      currentUser.reload()
        .then(getCurrentUserFromFirebase)
        .then((user) => {
          context.commit('PROFILE', {
            user,
          });
        });
    },
  },

  getters: {
    development: () => process.env.NODE_ENV === 'development',
    authenticated: state => !!state.user,
  },

});

export default store;
