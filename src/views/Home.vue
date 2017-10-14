<template>
  <div class="-x-view">
    <div class="text-xs-center">
      <img src="../assets/logo.png" alt="BOOKAT">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Home',

  data() {
    return {
      msg: 'Welcome to BOOKAT',
    };
  },

};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
