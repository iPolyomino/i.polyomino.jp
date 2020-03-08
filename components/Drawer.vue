<template>
  <v-navigation-drawer
    class="hidden-md-and-up"
    hide-overlay
    fixed
    right
    dark
    v-model="isOpenDrawer"
  >
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="toggleDrawer"
      ></v-app-bar-nav-icon>
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
</template>

<script>
export default {
  props: ["links", "toggleDrawer", "isOpenDrawer"]
};
</script>
