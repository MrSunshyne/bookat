import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

import Sample from '@/views/Sample';
import Signup from '@/views/auth/Signup';
import Login from '@/views/auth/Login';
import AccountReset from '@/views/auth/AccountReset';

import About from '@/views/About';

import Home from '@/views/Home';
import ServiceIndex from '@/views/ServiceIndex';
import Profile from '@/views/Profile';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/sample',
      name: 'Sample',
      component: Sample,
    },
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
        requiresAuth: false,
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/reset',
      name: 'Account Reset',
      component: AccountReset,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/services',
      name: 'Services',
      component: ServiceIndex,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;

const AUTH_ROUTES = ['/login', '/signup', '/reset'];

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next(store.getters.authenticated ? '/home' : '/login');
    return;
  }

  if (to.meta.requiresAuth && !store.getters.authenticated) {
    next('/login');
    return;
  }

  if (AUTH_ROUTES.includes(to.path) && store.getters.authenticated) {
    next('/home');
    return;
  }

  if (store.getters.authenticated) {
    to.meta.viewContainerClass = `-x-view-container-at-auth ${to.meta.viewContainerClass || ''}`; /* eslint no-param-reassign: off */
  }

  next();
});

router.afterEach((to /* , from */) => {
  document.title = `BOOKAT | ${to.name}`;
});

router.afterEach((to /* , from */) => {
  if (window.ga) {
    window.ga('send', 'event', 'View', to.path, to.name, to);
    window.ga('set', 'page', to.path);
    window.ga('send', 'pageview');
  }
});
