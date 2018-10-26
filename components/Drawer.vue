<template>  
  <v-navigation-drawer class='hidden-md-and-up' hide-overlay fixed right dark v-model='isOpenDrawer' height='100vh'>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop='toggleDrawer'></v-toolbar-side-icon>
    </v-toolbar>
    <v-list>
      <v-list-tile v-for="link in links" :key="link.title" :href="link.link">
        {{ link.title }}
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["links", "toggleDrawer", "isOpenDrawer"]
};
</script>
