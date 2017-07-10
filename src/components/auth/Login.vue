<template>
  <div class="cs-view">
    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="Bookat" class="logo">
    </div>

    <form class="cs-flex-column" novalidate @submit.prevent="login">

      <md-input-container>
        <md-icon>person</md-icon>
        <label>Username</label>
        <md-input required v-model="username" autofocus></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input required type="password" v-model="password"></md-input>
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

    <!--<md-dialog md-open-from="#aboutButton" md-close-to="#aboutButton" ref="aboutDialog" md-title="About Bookat">
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
import AboutContent from '../AboutContent';

export default {
  name: 'login',
  components: {
    AboutContent,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.commit('login', {
        token: '123',
        user: {
          id: '0',
          name: 'Nader T.',
          email: 'nader@bookat.tn',
          phone: '25199525',
        },
      });
      this.$router.push('/home');
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
