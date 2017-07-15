<template>
  <div class="cs-view">

    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="bookAt" class="logo">
    </div>

    <div class="md-title cs-text-center">Account Reset</div>

    <form class="cs-flex-column" novalidate @submit.prevent="next" v-if="!done">

      <md-input-container :class="error.email ? 'md-input-invalid' : ''">
        <md-icon>email</md-icon>
        <label>Email</label>
        <md-input type="email" required v-model="email"></md-input>
        <span class="md-error">{{error.email}}</span>
      </md-input-container>

      <md-button class="md-raised md-primary" type="submit">Next</md-button>

    </form>

    <md-whiteframe v-if="done" class="md-body-1 message">
      Please check your inbox for password reset email.
    </md-whiteframe>

    <md-snackbar ref="snackbar">
      <span>{{error.$message}}</span>
      <md-button class="md-accent" @click="$refs.snackbar.close()">Ok</md-button>
    </md-snackbar>

    <div class="link-container">

      <router-link tag="md-button" class="md-primary link-item" to="/login">
        Login
      </router-link>

      <router-link tag="md-button" class="md-primary link-item" to="/signup">
        Signup
      </router-link>

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
