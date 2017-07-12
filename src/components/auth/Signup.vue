<template>
  <div class="cs-view">

    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="bookAt" class="logo">
    </div>

    <div class="md-title cs-text-center">Signup</div>

    <form class="cs-flex-column" novalidate @submit.prevent="signup">

      <md-input-container :class="error.name ? 'md-input-invalid' : ''">
        <md-icon>person</md-icon>
        <label>Name</label>
        <md-input required v-model="name"></md-input>
        <span class="md-error">{{error.name}}</span>
      </md-input-container>

      <md-input-container :class="error.email ? 'md-input-invalid' : ''">
        <md-icon>email</md-icon>
        <label>Email</label>
        <md-input type="email" required v-model="email"></md-input>
        <span class="md-error">{{error.email}}</span>
      </md-input-container>

      <md-input-container :class="error.phone ? 'md-input-invalid' : ''">
        <md-icon>phone</md-icon>
        <label>Phone</label>
        <md-input required v-model="phone"></md-input>
        <span class="md-error">{{error.phone}}</span>
      </md-input-container>

      <md-input-container :class="error.password ? 'md-input-invalid' : ''">
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input required type="password" v-model="password"></md-input>
        <span class="md-error">{{error.password}}</span>
      </md-input-container>

      <md-input-container :class="error.passwordConfirmation ? 'md-input-invalid' : ''">
        <md-icon>lock_outline</md-icon>
        <label>Password Confirmation</label>
        <md-input required type="password" v-model="passwordConfirmation"></md-input>
        <span class="md-error">{{error.passwordConfirmation}}</span>
      </md-input-container>

      <div class="cs-flex-row">
        <md-button class="md-google" @click="connectWithGoogle">Google</md-button>
        <md-button class="md-facebook" @click="connectWithFacebook">Facebook</md-button>
      </div>

      <!--<div class="cs-flex-column">
        <md-button class="md-google" @click="connectWithGoogle">Connect with Google</md-button>
        <md-button class="md-facebook" @click="connectWithFacebook">Connect with Facebook</md-button>
      </div>-->

      <md-button class="md-raised md-primary" type="submit">Signup</md-button>

      <md-snackbar ref="snackbar">
        <span>{{error.$message}}</span>
        <md-button class="md-accent" @click="$refs.snackbar.close()">Ok</md-button>
      </md-snackbar>

    </form>

    <div class="link-container">

      <router-link tag="md-button" class="md-primary link-item" to="/login">
        Login
      </router-link>

      <router-link tag="md-button" class="md-primary i-link-item" to="/reset">
        Account Reset
      </router-link>

    </div>

    <md-dialog-alert md-title="Google Signup" md-content="Coming soon!" ref="comingSoonGoogleDialog"></md-dialog-alert>

    <md-dialog-alert md-title="Facebook Signup" md-content="Coming soon!" ref="comingSoonFacebookDialog"></md-dialog-alert>

  </div>
</template>

<script>
import debug from '@/common/debug';
import firebase from '@/common/firebase';

import LANG from '@/common/lang';

const FIREBASE_TO_LANG = {
  'auth/invalid-email': 'InvalidEmail',
  'auth/email-already-in-use': 'InvalidEmail',
  'auth/weak-password': 'InvalidPassword',
};

export default {
  name: 'signup',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
      error: {},
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
      ).then((user) => {
        debug(user);

        return user.updateProfile({
          displayName: this.$data.name,
          phoneNumber: this.$data.phone,
          photoURL: 'https://placeimg.com/64/64/people/8',
        }).then((...args) => {
          debug(args);
          return user;
        });
      }).then((user) => {
        debug(user);
        this.$store.commit('login', {
          token: 'true',
          user: {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
            picture: user.photoURL,
          },
        });
        this.$router.push('/home');
      })
        .catch((error) => {
          debug.error(Object.assign({}, error));
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
    connectWithGoogle() {
      this.$refs.comingSoonGoogleDialog.open();
    },
    connectWithFacebook() {
      this.$refs.comingSoonFacebookDialog.open();
    },
  },
};
</script>

<style scoped src="./common.css"></style>

<style scoped>

</style>
