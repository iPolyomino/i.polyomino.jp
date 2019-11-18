<template>
  <v-layout>
    <v-app-bar app clipped-left dark color="grey">
      <v-toolbar-title>
        polyomino.jp
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer fixed right dark temporary v-model="drawer">
      <v-app-bar app clipped-left dark color="grey">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-list dense>
        <v-list-item
          right
          v-for="link in links"
          :key="link.title"
          :href="link.link"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  props: ["links"]
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
