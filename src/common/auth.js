import { debugFactory } from '@/common/debug';

import { firebase } from '@/common/firebase';

import store from '@/store';

const debug = debugFactory('@/common/firebase');

export const normalizeUserFromFirebase = user => ({
  uid: user.uid,
  name: user.displayName,
  email: user.email,
  emailVerified: user.emailVerified,
  phoneNumber: user.phoneNumber,
  picture: user.photoURL || '/static/img/user-picture.png',
});

export const getCurrentUserFromFirebase = () => {
  const { currentUser } = firebase.auth();
  const user = normalizeUserFromFirebase(currentUser);

  return firebase.database().ref(`/user/${user.uid}`).once('value').then((snapshot) => {
    const profileExtension = snapshot.val() || {};
    Object.assign(user, profileExtension);
    return user;
  });
};

export const onAuthStateChanged = (currentUser) => { /* eslint import/prefer-default-export: off */
  debug('currentUser', currentUser);

  if (currentUser && currentUser.displayName) {
    // User is signed in.

    if (store.getters.authenticated) {
      store.dispatch('reloadProfile');
    } else {
      store.dispatch('login');
    }
  } else {
    // User is signed out.

    // ...
  }

  return currentUser;
};

firebase.auth().onAuthStateChanged(onAuthStateChanged);
