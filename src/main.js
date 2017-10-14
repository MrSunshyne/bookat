
import '@/common/debug';

import '@/common/config';
import '@/common/event';

import Vue from 'vue';

import '@/common/vue';

import '@/common/vuetify';
import '@/common/portal-vue';

import '@/common/vue-components';

import App from '@/App';
import store from '@/store';
import router from '@/router';

import '@/common/firebase';
import '@/common/auth';

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
