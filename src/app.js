export default {
  name: 'app',
  methods: {
    openNavigation() {
      if (!this.$refs.navigation) {
        return;
      }
      this.$refs.navigation.open();
    },
    _closeNavigation() {
      if (!this.$refs.navigation) {
        return;
      }
      this.$refs.navigation.close();
    },
    _resetScroll() {
      if (!this.$refs.main) {
        return;
      }
      this.$refs.main.scrollTop = 0;
    },
    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
      this._closeNavigation();
    },
  },
  created() {
    this.$router.afterEach((to /* , from*/ ) => {
      document.title = `Bookat | ${to.name}`;
      this._resetScroll();
      this._closeNavigation();
    });
  },
};
