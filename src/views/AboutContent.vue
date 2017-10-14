<template>
  <div>

    <div class="text-xs-center">
      <img src="../assets/logo.png" alt="BOOKAT" class="logo">
    </div>

    <p class="subheading i-body-1 mt-4">BOOKAT is a generic and simple solution for booking services...</p>
    <p class="subheading i-body-1 mt-4">It is being built with Firebase Vue.js, vue-router, Vuex, Firebase... Check the code at <a href="https://github.com/naderio/bookat" target="_blank" rel="noopener">GitHub</a></p>

    <v-list two-line style="background: transparent;">

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Somewhere, Tunis</v-list-tile-title>
          <v-list-tile-sub-title>Address</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>public</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a class="link" target="_blank" href="https://bookat.lab.nader.tech">bookat.lab.nader.tech</a>
          </v-list-tile-title>
          <v-list-tile-sub-title>Website</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>email</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a class="link" target="_blank" href="mailto:contact@bookat.lab.nader.tech">contact@bookat.lab.nader.tech</a>
          </v-list-tile-title>
          <v-list-tile-sub-title>Email</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>phone</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <a class="link" target="_blank" href="tel:+21670000000">(+216) 70 000 000</a>
          </v-list-tile-title>
          <v-list-tile-sub-title>Phone</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>

  </div>
</template>
