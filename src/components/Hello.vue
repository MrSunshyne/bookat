<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <md-button>Default</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button class="md-warn">Warn</md-button>
      <md-button class="md-primary" disabled>Disabled</md-button>
      <md-button class="md-dense">Dense</md-button>
    </div>
    <div>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised md-warn">Warn</md-button>
      <md-button class="md-raised md-primary" disabled>Disabled</md-button>
      <md-button class="md-raised md-dense">Dense</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Bookat',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
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
