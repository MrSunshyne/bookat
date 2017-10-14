<template>
  <div class="-x-view">

    <div class="text-xs-center">
      <img src="../../assets/logo.png" alt="BOOKAT" class="logo">
    </div>

    <div class="title text-xs-center">Signup</div>

    <form class="layout column" novalidate @submit.prevent="signup">

      <v-text-field id="name_input"
        type="name"
        v-model="name"
        label="Name"
        prepend-icon="person"
        :error="!!error.name"
        :error-messages="error.name ? [error.name] : []"
        required
      ></v-text-field>

      <v-text-field id="email_input"
        type="email"
        v-model="email"
        label="Email"
        prepend-icon="email"
        :error="!!error.email"
        :error-messages="error.email ? [error.email] : []"
        required
      ></v-text-field>

      <v-text-field id="phoneNumber_input"
        type="phoneNumber"
        v-model="phoneNumber"
        label="Phone"
        prepend-icon="phone"
        :error="!!error.phoneNumber"
        :error-messages="error.phoneNumber ? [error.phoneNumber] : []"
        required
      ></v-text-field>

      <v-text-field id="password_input"
        type="password"
        v-model="password"
        label="Password"
        prepend-icon="lock_outline"
        :error="!!error.password"
        :error-messages="error.password ? [error.password] : []"
        required
      ></v-text-field>

      <v-text-field id="passwordConfirmation_input"
        type="password"
        v-model="passwordConfirmation"
        label="Password Confirmation"
        prepend-icon="lock_outline "
        :error="!!error.passwordConfirmation"
        :error-messages="error.passwordConfirmation ? [error.passwordConfirmation] : []"
        required
      ></v-text-field>

      <v-btn flat color="primary" v-if="$store.getters.development" @click="fillWithDemoData">Fill with Demo Data</v-btn>

      <v-layout row child-flex>
        <v-btn flat class="btn-google" title="Signup with Google" @click="loginWithGoogle">Google</v-btn>
        <v-btn flat class="btn-facebook" title="Signup with Facebook" @click="loginWithFacebook">Facebook</v-btn>
      </v-layout>

      <v-btn id="submit" raised color="primary" type="submit">Signup</v-btn>

    </form>

    <div class="link-container">

      <v-btn id="login" flat color="primary" class="link-item" to="/login">
        Login
      </v-btn>

      <v-btn id="reset" flat color="primary" class="link-item" to="/reset">
        Account Reset
      </v-btn>

    </div>

    <x-snackbar ref="snackbar"></x-snackbar>

  </div>
</template>

<script src="./Signup.js"></script>

<style scoped src="./common.css"></style>
