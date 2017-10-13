
<template>
    <v-snackbar
      v-model="visible"
    >
      {{ content }}
      <v-btn dark flat color="primary" @click.native="hide">Ok</v-btn>
    </v-snackbar>
</template>

<script>
export default {

  name: 'x-snackbar',

  data() {
    return {
      content: '',
      visible: false,
    };
  },

  methods: {

    show(content) {
      this.$data.content = content;
      this.$data.visible = true;
    },

    hide() {
      this.$data.visible = false;
    },

  },

};
</script>
