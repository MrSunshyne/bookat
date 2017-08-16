<template>
  <div class="cs-view">

    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="BOOKAT" class="logo">
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

      <md-input-container :class="error.phoneNumber ? 'md-input-invalid' : ''">
        <md-icon>phone</md-icon>
        <label>Phone</label>
        <md-input required v-model="phoneNumber"></md-input>
        <span class="md-error">{{error.phoneNumber}}</span>
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
        <md-button class="md-google" @click="loginWithGoogle">Google</md-button>
        <md-button class="md-facebook" @click="loginWithFacebook">Facebook</md-button>
      </div>

      <!--<div class="cs-flex-column">
        <md-button class="md-google" @click="loginWithGoogle">login with Google</md-button>
        <md-button class="md-facebook" @click="loginWithFacebook">login with Facebook</md-button>
      </div>-->

      <md-button class="md-primary" v-if="$store.getters.dev" @click="fillWithDemoAccount">Fill with Demo Data</md-button>

      <md-button id="submit" class="md-raised md-primary" type="submit">Signup</md-button>

      <md-snackbar ref="snackbar">
        <span>{{error.summary}}</span>
        <md-button class="md-accent" @click="$refs.snackbar.close()">Ok</md-button>
      </md-snackbar>

    </form>

    <div class="link-container">

      <router-link id="login" tag="md-button" class="md-primary link-item" to="/login">
        Login
      </router-link>

      <router-link id="reset" tag="md-button" class="md-primary link-item" to="/reset">
        Account Reset
      </router-link>

    </div>

  </div>
</template>

<script src="./Signup.js"></script>

<style scoped src="./common.css"></style>
