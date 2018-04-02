<template>
<v-toolbar app fixed clipped-left dark color="grey">
  <v-toolbar-title>
    <nuxt-link class="white--text headline" to="/">polyomino.jp</nuxt-link>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-xs-only">
    <v-btn class="headline" flat to="/">Home</v-btn>
    <v-btn class="headline" flat to="/aboutme">About</v-btn>
  </v-toolbar-items>
</v-toolbar>
</template>

<style>
a {
  text-decoration: none;
}
</style>
