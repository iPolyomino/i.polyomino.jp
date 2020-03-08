<template>
  <v-app-bar app fixed clipped-left color="grey" dark>
    <v-toolbar-title>
      <nuxt-link class="white--text headline" to="/">polyomino.jp</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  props: ["links", "toggleDrawer"]
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
