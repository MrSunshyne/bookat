import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';

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
  methods: {
    signup() {
      debug('signup');

      this.$data.error = {};

      if (!this.$data.name) {
        const message = LANG.ERROR.Required;
        this.$data.error.name = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (!this.$data.email) {
        const message = LANG.ERROR.Required;
        this.$data.error.email = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (!this.$data.phone) {
        const message = LANG.ERROR.Required;
        this.$data.error.phone = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (!this.$data.password) {
        const message = LANG.ERROR.Required;
        this.$data.error.password = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (!this.$data.password && !this.$data.passwordConfirmation) {
        const message = LANG.ERROR.Required;
        this.$data.error.passwordConfirmation = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (this.$data.password !== this.$data.passwordConfirmation) {
        const message = LANG.ERROR.PasswordMismatch;
        this.$data.error.password = message;
        this.$data.error.passwordConfirmation = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (this.$data.error.$message) {
        this.$refs.snackbar.open();
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(
        this.$data.email,
        this.$data.password,
      ).then(user => user.updateProfile({
        displayName: this.$data.name,
        phoneNumber: this.$data.phone,
        photoURL: 'https://bookat.lab.nader.tn/static/img/user-picture.png',
      })
        .then(() => user.sendEmailVerification())
        .then(() => user),
      ).catch((error) => {
        debug.error(error, Object.assign({}, error));
        this.$data.error = {};

        const code = FIREBASE_TO_LANG[error.code] || error.code;
        const message = LANG.ERROR[code] || error.message;

        if (code === 'InvalidEmail') {
          this.$data.error.email = message;
        }

        if (code === 'InvalidPassword') {
          this.$data.error.password = message;
          this.$data.error.passwordConfirmation = message;
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
