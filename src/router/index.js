import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';

import Signup from '@/components/auth/Signup';
import Login from '@/components/auth/Login';
import Recovery from '@/components/auth/Recovery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/auth/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/auth/recovery',
      name: 'Recovery',
      component: Recovery,
    },
  ],
});
