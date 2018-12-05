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
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="toggleDrawer"
      ></v-toolbar-side-icon>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="link.title"
      ></v-toolbar-items>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="link in links" :key="link.title" :href="link.link">{{
        link.title
      }}</v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["links", "toggleDrawer", "isOpenDrawer"]
};
</script>
