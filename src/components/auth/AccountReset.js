
import { debugFactory } from '@/common/debug';
import { firebase, FIREBASE_TO_LANG } from '@/common/firebase';

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
  methods: {
    next() {
      debug('next', this.$data);

      this.$data.error = {};

      if (!this.$data.email) {
        const message = LANG.ERROR.Required;
        this.$data.error.email = message;
        this.$data.error.$message = this.$data.error.$message || message;
      }

      if (this.$data.error.$message) {
        this.$refs.snackbar.open();
        return;
      }

      firebase.auth().sendPasswordResetEmail(this.$data.email).then((...args) => {
        // Email sent.
        debug(...args);
        this.$data.done = true;
      }, (error) => {
        debug.error(error, Object.assign({}, error));

        this.$data.error = {};

        const code = FIREBASE_TO_LANG[error.code] || error.code;
        const message = LANG.ERROR[code] || error.message;

        if (code === 'InvalidEmail') {
          this.$data.error.email = message;
        }

        if (code === 'UserNotFound') {
          this.$data.error.email = message;
        }

        this.$data.error.$message = this.$data.error.$message || error.message;

        this.$refs.snackbar.open();
      });
    },
  },
};
