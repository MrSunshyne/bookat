<template>
  <div class="-x-view">

    <div class="text-xs-center">
      <img src="../../assets/logo.png" alt="BOOKAT" class="logo">
    </div>

    <form class="layout column" novalidate @submit.prevent="login">

      <v-text-field id="email_input"
        type="email"
        v-model="email"
        label="Email"
        prepend-icon="person"
        :error="!!error.email"
        :error-messages="error.email ? [error.email] : []"
        required
        autofocus
      ></v-text-field>

      <v-text-field id="password_input"
        type="password"
        v-model="password"
        label="Password"
        prepend-icon="lock"
        :error="!!error.password"
        :error-messages="error.password ? [error.password] : []"
        required
      ></v-text-field>

      <v-btn flat color="primary" v-if="$store.getters.development" @click="fillWithDemoData">Fill with Demo Data</v-btn>

      <v-btn id="submit" raised color="primary" type="submit">Login</v-btn>

      <v-layout row child-flex>
        <v-btn raised class="btn-google" title="Login with Google" @click="loginWithGoogle">Google</v-btn>
        <v-btn raised class="btn-facebook" title="Login with Facebook" @click="loginWithFacebook">Facebook</v-btn>
      </v-layout>

    </form>

    <div class="link-container">

      <v-btn id="reset" flat color="primary" class="link-item" to="/reset">
        Account Reset
      </v-btn>

      <v-btn id="signup" flat color="primary" class="link-item" to="/signup">
        Signup
      </v-btn>

    </div>

    <div class="extra">

      <v-btn flat color="primary" to="/about">
        <v-icon left>info_outline</v-icon>
        About
      </v-btn>

    </div>

    <x-snackbar ref="snackbar"></x-snackbar>

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
