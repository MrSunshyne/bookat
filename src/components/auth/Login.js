import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';
import validator from '@/common/validator';

import LANG from '@/common/lang';

import AboutContent from '../AboutContent';

const debug = debugFactory('@/components/auth/Login');

export default {

  name: 'login',

  components: {
    AboutContent,
  },

  data() {
    return {
      error: {},
      email: '',
      password: '',
    };
  },

  beforeMount() {
    this.$validator = validator(this.$data);
  },

  methods: {

    login() {
      debug('login', this.$data);

      this.$validator.reset();

      this.$validator.field('email').required();
      this.$validator.field('password').required();

      if (this.$data.error.summary) {
        this.$refs.snackbar.open();
        return;
      }

      firebase.auth().signInWithEmailAndPassword(
        this.$data.email,
        this.$data.password,
      ).catch((error) => {
        debug.error(error, Object.assign({}, error));

        this.$validator.reset();

        const code = FIREBASE_TO_LANG[error.code] || error.code;
        const message = LANG.ERROR[code] || error.message;

        if (code === 'InvalidEmail') {
          this.$validator.field('email').error(message, false);
        }

        if (code === 'UserNotFound') {
          this.$validator.field('email').error(message, false);
        }

        if (code === 'LoginFailure') {
          this.$validator.summary(message, true);
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
      this.$data.email = 'demo@lab.nader.tech';
      this.$data.password = 'demopass';
    },

  },
};
