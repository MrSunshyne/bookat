<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">Bookat</h1>
    </md-toolbar>
    <main>
      <img src="./assets/logo.png" alt="Bookat">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}

main {
  padding: 16px;
}
</style>
