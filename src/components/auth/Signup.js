import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';
import { onAuthStateChanged } from '@/common/auth';
import validator from '@/common/validator';

import LANG from '@/common/lang';

const debug = debugFactory('@/components/auth/Signup');

export default {

  name: 'signup',

  data() {
    return {
      error: {},
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
    };
  },

  beforeMount() {
    this.$validator = validator(this.$data);
  },

  methods: {

    signup() {
      debug('signup');

      this.$validator.reset();

      this.$validator.field('name').required();
      this.$validator.field('email').required();
      this.$validator.field('phone').required();
      this.$validator.field('password').required();
      this.$validator.field('passwordConfirmation').required();

      if (this.$data.password !== this.$data.passwordConfirmation) {
        const message = LANG.ERROR.PasswordMismatch;
        this.$validator.field('password').error(message, false);
        this.$validator.field('passwordConfirmation').error(message, false);
        this.$validator.summary(message);
      }

      if (this.$data.error.summary) {
        this.$refs.snackbar.open();
        return;
      }

      const profile = {
        displayName: this.$data.name,
        photoURL: 'https://bookat.lab.nader.tn/static/img/user-picture.png',
      };

      firebase.auth().createUserWithEmailAndPassword(
        this.$data.email,
        this.$data.password,
      )
        .then(user => user.updateProfile(profile).then(() => user) /* resolves into void */)
        .then(user => user.sendEmailVerification().then(() => user) /* resolves into void */)
        .then(user => onAuthStateChanged(user) /* 1st execution missing displayName, no effect */)
        .catch((error) => {
          debug.error(error, Object.assign({}, error));
          this.$validator.reset();

          const code = FIREBASE_TO_LANG[error.code] || error.code;
          const message = LANG.ERROR[code] || error.message;

          if (code === 'InvalidEmail') {
            this.$validator.field('email').error(message, false);
          }

          if (code === 'ExistingEmail') {
            this.$validator.field('email').error(message, false);
          }

          if (code === 'InvalidPassword') {
            this.$validator.field('password').error(message, false);
            this.$validator.field('passwordConfirmation').error(message, false);
          }

          this.$validator.summary(error.message);

          this.$refs.snackbar.open();
        });
    },

    loginWithGoogle() {
      debug('loginWithGoogle');

      this.$validator.reset();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      firebase.auth().signInWithPopup(provider).catch((error) => {
        debug.error(error, Object.assign({}, error));

        this.$validator.reset();

        this.$validator.summary(error.message, true);

        this.$refs.snackbar.open();
      });
    },

    loginWithFacebook() {
      debug('loginWithFacebook');

      this.$validator.reset();

      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).catch((error) => {
        debug.error(error, Object.assign({}, error));

        this.$validator.reset();

        this.$validator.summary(error.message, true);

        this.$refs.snackbar.open();
      });
    },

    fillWithDemoAccount() {
      this.$data.name = 'Demo Account';
      this.$data.email = 'demo@bookat.lab.nader.tn';
      this.$data.phone = '123456789';
      this.$data.password = 'demopass';
      this.$data.passwordConfirmation = 'demopass';
    },

  },

};
