import {
  debugFactory,
} from '@/common/debug';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';

import store from '@/store';

const debug = debugFactory('@/common/firebase');

const config = {
  apiKey: 'AIzaSyBXzp0H4Cvi01jRkrjFwyJPI8z3N5dOTG0',
  authDomain: 'bookat-5e039.firebaseapp.com',
  databaseURL: 'https://bookat-5e039.firebaseio.com',
  projectId: 'bookat-5e039',
  storageBucket: 'bookat-5e039.appspot.com',
  messagingSenderId: '230769282985',
};
firebase.initializeApp(config);

// global.firebase = firebase;

// export default firebase;

export { firebase };

export const FIREBASE_TO_LANG = {

  'auth/invalid-email': 'InvalidEmail',
  'auth/user-not-found': 'UserNotFound',
  'auth/email-already-in-use': 'ExistingEmail',
  'auth/weak-password': 'InvalidPassword',
  'auth/wrong-password': 'LoginFailure',

};

firebase.auth().onAuthStateChanged((user) => {
  debug('user', user);

  if (user) {
    // User is signed in.

    store.dispatch('LOGIN', {
      token: 'true',
      user: {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        phone: user.phoneNumber,
        picture: user.photoURL || 'https://bookat.lab.nader.tn/static/img/user-picture.png',
      },
    });
  } else {
    // User is signed out.

    // ...
  }
});
