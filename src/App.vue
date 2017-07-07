<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">Bookat</h1>
    </md-toolbar>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
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

.fade-enter-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>
