<template>
  <div class="cs-view">

    <div class="cs-text-center">
      <img src="../../assets/logo.png" alt="Bookat" class="logo">
    </div>

    <div class="md-title cs-text-center">Signup</div>

    <form class="cs-flex-column" novalidate @submit.prevent="signup">

      <md-input-container>
        <md-icon>person</md-icon>
        <label>Name</label>
        <md-input required v-model="name"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>email</md-icon>
        <label>Email</label>
        <md-input required v-model="email"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>phone</md-icon>
        <label>Phone</label>
        <md-input required v-model="phone"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input required type="password" v-model="password"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>lock_outline</md-icon>
        <label>Password Confirmation</label>
        <md-input required type="password" v-model="passwordConfirmation"></md-input>
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
export default {
  name: 'signup',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
    };
  },
  methods: {
    signup() {
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
