<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-title><nuxt-link to="/">polyomino.jp</nuxt-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/aboutme">About me</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
a {
  text-decoration: none;
}
</style>
