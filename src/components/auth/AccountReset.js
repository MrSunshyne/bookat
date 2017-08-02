
import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';
import validator from '@/common/validator';

import LANG from '@/common/lang';

const debug = debugFactory('@/components/auth/AccountReset');

export default {

  name: 'account-reset',

  data() {
    return {
      error: {},
      email: '',
      done: false,
    };
  },

  beforeMount() {
    this.$validator = validator(this.$data);
  },

  methods: {

    next() {
      debug('next', this.$data);

      this.$validator.reset();

      this.$validator.field('email').required();

      if (this.$data.error.summary) {
        this.$refs.snackbar.open();
        return;
      }

      firebase.auth().sendPasswordResetEmail(this.$data.email).then(() => {
        this.$data.done = true;
      }, (error) => {
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

        this.$validator.summary(error.message);

        this.$refs.snackbar.open();
      });
    },

  },

};
