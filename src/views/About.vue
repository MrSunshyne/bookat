<template>
  <div class="-x-view -x-view-content">

    <about-content></about-content>

    <v-layout row child-flex v-if="!$store.getters.authenticated">

      <v-btn flat color="primary" class="link-item" to="/login">
        Login
      </v-btn>

      <v-btn flat color="primary" class="link-item" to="/signup">
        Signup
      </v-btn>

    </v-layout>

  </div>
</template>

<script>
import AboutContent from './AboutContent';

export default {

  name: 'About',

  components: {
    AboutContent,
  },

};
</script>

<style scoped src="./auth/common.css"></style>
