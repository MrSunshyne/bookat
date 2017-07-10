import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

import Signup from '@/components/auth/Signup';
import Login from '@/components/auth/Login';
import AccountReset from '@/components/auth/AccountReset';

import About from '@/components/About';

import Home from '@/components/Home';
import Profile from '@/components/Profile';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        path: '/home',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        authenticated: false,
        styleClass: 'cs-view-container-at-auth',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        authenticated: false,
        styleClass: 'cs-view-container-at-auth',
      },
    },
    {
      path: '/reset',
      name: 'Account Reset',
      component: AccountReset,
      meta: {
        authenticated: false,
        styleClass: 'cs-view-container-at-auth',
      },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        authenticated: false,
        styleClass: '',
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        authenticated: true,
        styleClass: '',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        authenticated: true,
        styleClass: '',
      },
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.meta.authenticated && !store.getters.authenticated) {
    next('/login');
    return;
  }
  next();
});

router.afterEach((to /* , from*/) => {
  document.title = `Bookat | ${to.name}`;
  document.body.querySelector('#app > main').scrollTop = 0;
});
