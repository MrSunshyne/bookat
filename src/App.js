export default {

  name: 'App',

  data() {
    return {
      navigationDrawer: null,
      navigationMenuItems: [
        {
          title: 'Home',
          icon: 'move_to_inbox',
          route: '/home',
        },
        {
          title: 'My Services',
          icon: 'star',
          route: '/services',
        },
        {
          title: 'Profile',
          icon: 'person',
          route: '/profile',
        },
        {
          title: 'About',
          icon: 'info_outline',
          route: '/about',
        },
      ],
      sideviewDrawer: null,
    };
  },

  beforeMount() {
    if (process.env.NODE_ENV === 'development') {
      this.$data.navigationMenuItems.push({
        title: 'Sample',
        icon: 'code',
        route: '/sample',
      });
    }
  },

  methods: {

    logout() {
      this.$store.dispatch('logout');
    },

  },


};
