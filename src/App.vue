<template>
  <v-app>

    <v-navigation-drawer v-model="navigationDrawer" app temporary fixed v-if="$store.getters.authenticated">

      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img :src="$store.state.user.picture" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{$store.state.user.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{$store.state.user.email}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{$store.state.user.phoneNumber}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list class="pt-0" dense>
        <v-list-tile v-for="item in navigationMenuItems" :key="item.title" ripple :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile ripple @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-navigation-drawer v-model="sideviewDrawer" app temporary fixed right touchless v-if="$store.getters.authenticated">
      <portal-target name="sideview"></portal-target>
    </v-navigation-drawer>

    <v-toolbar app fixed v-if="$store.getters.authenticated">

      <v-toolbar-side-icon @click.stop="navigationDrawer = !navigationDrawer"></v-toolbar-side-icon>

      <v-toolbar-title>BOOKAT</v-toolbar-title>

      <v-spacer></v-spacer>

      <portal-target name="toolbar"></portal-target>

      <!--
        <v-menu bottom right>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile href="tel:+21670242424">
            <v-list-tile-action>
              <v-icon>headset_mic</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Appeler un opérateur</v-list-tile-title>
          </v-list-tile>
          <portal-target name="toolbar-more"></portal-target>
        </v-list>
      </v-menu> -->

    </v-toolbar>

    <main>
      <v-content>
        <v-container fluid fill-height class="-x-relative">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>

  </v-app>
</template>

<!-- <style src="normalize.css/normalize.css"></style> -->

<style lang="stylus">
// $color-pack = false

@require '../node_modules/vuetify/src/stylus/settings/_colors';

$theme := {
  primary: $blue-grey.darken-2
  accent: $amber.base
  secondary: $grey.darken-3
  info: $blue.base
  warning: $amber.base
  error: $red.base
  success: $green.base
}

@require '../node_modules/vuetify/src/stylus/main';

</style>

<style src="./App.css"></style>

<script src="./App.js"></script>
