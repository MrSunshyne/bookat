
import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';
import validator from '@/common/validator';

import LANG from '@/common/lang';

const debug = debugFactory('@/views/auth/AccountReset');

export default {

  name: 'account-reset',

  beforeMount() {
    this.$validator = validator(this.$data);
  },

  data() {
    return {
      error: {},
      email: '',
      done: false,
    };
  },

  methods: {

    next() {
      debug('next', this.$data);

      this.$validator.reset();

      this.$validator.field('email').required();

      if (this.$data.error.summary) {
        this.$refs.snackbar.show(this.$data.error.summary);
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

        this.$refs.snackbar.show(this.$data.error.summary);
      });
    },

    fillWithDemoData() {
      this.$data.email = 'demo@lab.nader.tech';
    },

  },

};
