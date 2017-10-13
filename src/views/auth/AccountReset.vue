<template>
  <div class="-x-view">

    <div class="c-text-center">
      <img src="../../assets/logo.png" alt="BOOKAT" class="logo">
    </div>

    <div class="title c-text-center">Account Reset</div>

    <form class="-x-flex-column" novalidate @submit.prevent="next" v-if="!done">

      <v-text-field id="email_input"
        type="email"
        v-model="email"
        label="Email"
        prepend-icon="email"
        :error="!!error.email"
        :error-messages="error.email ? [error.email] : []"
        required
        autofocus
      ></v-text-field>

      <v-btn flat color="primary" v-if="$store.getters.development" @click="fillWithDemoData">Fill with Demo Data</v-btn>

      <v-btn raised color="primary" type="submit">Next</v-btn>

    </form>

    <div v-if="done" class="body-1 message">
      Please check your inbox for password reset email.
    </div>

    <x-snackbar ref="snackbar"></x-snackbar>

    <div class="link-container">

      <v-btn id="login" flat color="primary" class="link-item" to="/login">
        Login
      </v-btn>

      <v-btn id="signup" flat color="primary" class="link-item" to="/signup">
        Signup
      </v-btn>

    </div>

  </div>
</template>

<script src="./AccountReset.js"></script>

<style scoped src="./common.css"></style>

<style scoped>
.message {
  background: white;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 16px;
}
</style>
