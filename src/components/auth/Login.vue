<template>
  <div class="cs-view">
    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="bookAt" class="logo">
    </div>

    <form class="cs-flex-column" novalidate @submit.prevent="login">

      <md-input-container :class="error.username ? 'md-input-invalid' : ''">
        <md-icon>person</md-icon>
        <label>Username</label>
        <md-input required v-model="username" autofocus></md-input>
        <span class="md-error">{{error.username}}</span>
      </md-input-container>

      <md-input-container :class="error.password ? 'md-input-invalid' : ''">
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input required type="password" v-model="password"></md-input>
        <span class="md-error">{{error.password}}</span>
      </md-input-container>

      <md-button class="md-raised md-primary" type="submit">Login</md-button>

      <div class="cs-flex-row">
        <md-button class="md-raised md-google" @click="loginWithGoogle">Google</md-button>
        <md-button class="md-raised md-facebook" @click="loginWithFacebook">Facebook</md-button>
      </div>

      <!--<div class="cs-flex-column">
        <md-button class="md-raised md-google" @click="loginWithGoogle">Login with Google</md-button>
        <md-button class="md-raised md-facebook" @click="loginWithFacebook">Login with Facebook</md-button>
      </div>-->

      <md-snackbar ref="snackbar">
        <span>{{error.$message}}</span>
        <md-button class="md-accent" @click="$refs.snackbar.close()">Ok</md-button>
      </md-snackbar>

    </form>

    <div class="link-container">

      <router-link tag="md-button" class="md-primary i-link-item" to="/reset">
        Account Reset
      </router-link>

      <router-link tag="md-button" class="md-primary link-item" style="flex: 1;" to="/signup">
        Signup
      </router-link>

    </div>

    <div class="extra">

      <!--<md-button class="md-primary" id="aboutButton" @click="$refs.aboutDialog.open()">
        <md-icon>info_outline</md-icon>
        About
      </md-button>-->

      <router-link tag="md-button" class="md-primary" to="/about">
        <md-icon>info_outline</md-icon>
        About
      </router-link>

    </div>

    <!--<md-dialog md-open-from="#aboutButton" md-close-to="#aboutButton" ref="aboutDialog" md-title="About bookAt">
      <md-dialog-title>Create new note</md-dialog-title>

      <md-dialog-content>
        <about-content></about-content>
      </md-dialog-content>

    </md-dialog>-->

    <md-dialog-alert md-title="Google Login" md-content="Coming soon!" ref="comingSoonGoogleDialog"></md-dialog-alert>

    <md-dialog-alert md-title="Facebook Login" md-content="Coming soon!" ref="comingSoonFacebookDialog"></md-dialog-alert>

  </div>
</template>

<script>
import debug from '@/common/debug';
import firebase from '@/common/firebase';

import LANG from '@/common/lang';

import AboutContent from '../AboutContent';

const FIREBASE_TO_LANG = {
  'auth/invalid-email': 'InvalidUsername',
  'auth/user-not-found': 'UserNotFound',
  'auth/wrong-password': 'LoginFailure',
};

export default {
  name: 'login',
  components: {
    AboutContent,
  },
  data() {
    return {
      username: '',
      password: '',
      error: {},
    };
  },
  methods: {
    login() {
      debug('login');

      this.$data.error = {};

      firebase.auth().signInWithEmailAndPassword(
        this.$data.username,
        this.$data.password,
      ).then((user) => {
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

          if (code === 'InvalidUsername') {
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
      this.$refs.comingSoonGoogleDialog.open();
    },
    loginWithFacebook() {
      this.$refs.comingSoonFacebookDialog.open();
    },
  },
};
</script>

<style scoped src="./common.css"></style>

<style scoped>
.extra {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
