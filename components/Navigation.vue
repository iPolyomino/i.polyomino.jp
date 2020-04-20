<template>
  <div>
    <v-app-bar app clipped-left color="grey" dark>
      <v-toolbar-title>
        <nuxt-link class="white--text headline" to="/">polyomino.jp</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="link.title"
      >
        <v-btn class="headline" text :to="link.link">{{ link.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      app
      fixed
      right
      dark
      disable-resize-watcher
      v-model="drawer"
    >
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-items
          class="hidden-sm-and-down"
          v-for="link in links"
          :key="link.title"
        ></v-toolbar-items>
      </v-toolbar>
      <v-list-item v-for="link in links" :key="link.title" :href="link.link">
        <v-list-item-content>{{ link.title }}</v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["links"],
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
