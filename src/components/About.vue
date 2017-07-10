<template>
  <div class="cs-view cs-view-content">

    <div class="cs-text-center">
      <img src="../assets/logo.png" alt="Bookat" class="logo">
    </div>

    <div class="md-title cs-text-center" v-if="!$store.getters.authenticated">About Bookat</div>

    <about-content></about-content>

    <div class="cs-flex-row" v-if="!$store.getters.authenticated">

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
import AboutContent from './AboutContent';

export default {
  name: 'about',
  components: {
    AboutContent,
  },
};
</script>

<style scoped src="./auth/common.css"></style>

<style scoped>

</style>
