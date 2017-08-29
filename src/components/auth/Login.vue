<template>
  <div class="cs-view">
    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="BOOKAT" class="logo">
    </div>

    <form class="cs-flex-column" novalidate @submit.prevent="login">

      <md-input-container :class="error.email ? 'md-input-invalid' : ''">
        <md-icon>person</md-icon>
        <label>Email</label>
        <md-input id="email_input" required v-model="email" autofocus></md-input>
        <span class="md-error">{{error.email}}</span>
      </md-input-container>

      <md-input-container :class="error.password ? 'md-input-invalid' : ''">
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input id="password_input" required type="password" v-model="password"></md-input>
        <span class="md-error">{{error.password}}</span>
      </md-input-container>

      <md-button class="md-primary" v-if="!$store.getters.production" @click="fillWithDemoAccount">Fill with Demo Data</md-button>

      <md-button id="submit" class="md-raised md-primary" type="submit">Login</md-button>

      <div class="cs-flex-row">
        <md-button class="md-raised md-google" @click="loginWithGoogle">Google</md-button>
        <md-button class="md-raised md-facebook" @click="loginWithFacebook">Facebook</md-button>
      </div>

      <!--<div class="cs-flex-column">
        <md-button class="md-raised md-google" @click="loginWithGoogle">Login with Google</md-button>
        <md-button class="md-raised md-facebook" @click="loginWithFacebook">Login with Facebook</md-button>
      </div>-->

      <md-snackbar ref="snackbar">
        <span>{{error.summary}}</span>
        <md-button class="md-accent" @click="$refs.snackbar.close()">Ok</md-button>
      </md-snackbar>

    </form>

    <div class="link-container">

      <router-link id="reset" tag="md-button" class="md-primary link-item" to="/reset">
        Account Reset
      </router-link>

      <router-link id="signup" tag="md-button" class="md-primary link-item" to="/signup">
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

    <!--<md-dialog md-open-from="#aboutButton" md-close-to="#aboutButton" ref="aboutDialog" md-title="About BOOKAT">
      <md-dialog-title>Create new note</md-dialog-title>

      <md-dialog-content>
        <about-content></about-content>
      </md-dialog-content>

    </md-dialog>-->

  </div>
</template>

<script src="./Login.js"></script>

<style scoped src="./common.css"></style>

<style scoped>
.extra {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
