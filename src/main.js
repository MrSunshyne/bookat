
import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import app from './app';
import store from './store';
import router from './router';

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'blue-grey',
  accent: 'deep-orange',
  warn: 'red',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  components: { app },
});
