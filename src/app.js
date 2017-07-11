export default {
  name: 'app',
  methods: {

    openNavigation() {
      if (!this.$refs.navigation) {
        return;
      }
      this.$refs.navigation.open();
    },

    onRouteChanged() {
      if (this.$refs.navigation) {
        this.$refs.navigation.close();
      }

      if (this.$refs.main) {
        this.$refs.main.scrollTop = 0;
      }
    },

    logout() {
      this.$store.commit('logout');
      this.$router.push('/login');
    },

  },
  created() {
    this.$router.afterEach(this.onRouteChanged);
  },
};
