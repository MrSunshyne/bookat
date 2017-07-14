<template>
  <div class="cs-view cs-view-content">

    <ul>
      <li>name: {{$store.state.user.name}}</li>
      <li>email: {{$store.state.user.email}}</li>
      <li>phone: {{$store.state.user.phone}}</li>
      <li>picture: {{$store.state.user.picture}}</li>
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
};
</script>

<style>

</style>
