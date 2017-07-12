<template>
  <div class="cs-view">

    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="bookAt" class="logo">
    </div>

    <div class="md-title cs-text-center">Account Reset</div>

    <form class="cs-flex-column" novalidate @submit.stop.prevent="submit">

      <md-input-container>
        <md-icon>email</md-icon>
        <label>Email</label>
        <md-input required v-model="email"></md-input>
      </md-input-container>

      <md-button class="md-raised md-primary" @click="next">Next</md-button>

    </form>

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

<script>
export default {
  name: 'account-reset',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    next() { },
  },
};
</script>

<style scoped src="./common.css"></style>

<style scoped>

</style>
