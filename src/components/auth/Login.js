import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';

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
      username: '',
      password: '',
    };
  },
  methods: {

    login() {
      debug('login');

      this.$data.error = {};

      firebase.auth().signInWithEmailAndPassword(
        this.$data.username,
        this.$data.password,
      ).catch((error) => {
        debug.error(error, Object.assign({}, error));

        this.$data.error = {};

        const code = FIREBASE_TO_LANG[error.code] || error.code;
        const message = LANG.ERROR[code] || error.message;

        if (code === 'InvalidEmail') {
          this.$data.error.username = message;
        }

        if (code === 'UserNotFound') {
          this.$data.error.username = message;
        }

        if (code === 'LoginFailure') {
          this.$data.error.$message = message;
        }

        this.$data.error.$message = this.$data.error.$message || error.message;

        this.$refs.snackbar.open();
      });
    },

    loginWithGoogle() {
      debug('loginWithGoogle');

      this.$data.error = {};

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      firebase.auth().signInWithPopup(provider).catch((error) => {
        debug.error(error, Object.assign({}, error));

        this.$data.error = {};

        this.$data.error.$message = error.message;

        this.$refs.snackbar.open();
      });
    },

    loginWithFacebook() {
      debug('loginWithFacebook');

      this.$data.error = {};

      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).catch((error) => {
        debug.error(error, Object.assign({}, error));

        this.$data.error = {};

        this.$data.error.$message = error.message;

        this.$refs.snackbar.open();
      });
    },

  },
};
