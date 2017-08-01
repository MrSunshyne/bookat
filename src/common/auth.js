import { debugFactory } from '@/common/debug';

import { firebase } from '@/common/firebase';

import store from '@/store';

const debug = debugFactory('@/common/firebase');

export const normalizeFirebaseUserProfile = user => ({
  id: user.uid,
  name: user.displayName,
  email: user.email,
  emailVerified: user.emailVerified,
  phone: user.phoneNumber,
  picture: user.photoURL || 'https://bookat.lab.nader.tech/static/img/user-picture.png',
});

export const onAuthStateChanged = (user) => { /* eslint import/prefer-default-export: off */
  debug('user', user);

  if (user && user.displayName) {
    // User is signed in.

    store.dispatch('AUTH_LOGIN', {
      user: normalizeFirebaseUserProfile(user),
    });
  } else {
    // User is signed out.

    // ...
  }

  return user;
};

firebase.auth().onAuthStateChanged(onAuthStateChanged);
