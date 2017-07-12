import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from './App';
import store from './store';
import router from './router';
import './data';

import './common/firebase';

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
  template: '<App/>',
  components: {
    App,
  },
});

// global.require = module => require(module); /* eslint global-require: off */
