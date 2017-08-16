import '@/common/debug';

import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from '@/App';
import store from '@/store';
import router from '@/router';

import '@/common/data';
import '@/common/firebase';
import '@/common/auth';

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: {
    color: 'blue-grey',
    hue: 800,
  },
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
