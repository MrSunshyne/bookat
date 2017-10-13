<template>
  <div class="-x-view -x-view-content">

    <ul>
      <li>name: {{user.name}}</li>
      <li>email: {{user.email}}</li>
      <li>phoneNumber: {{user.phoneNumber}}</li>
      <li>picture: {{user.picture}}</li>
    </ul>

  </div>
</template>

<script>
export default {

  name: 'profile',

  data() {
    return {
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  beforeMount() {
    this.$store.dispatch('reloadProfile');
  },

};
</script>

<style>

</style>
