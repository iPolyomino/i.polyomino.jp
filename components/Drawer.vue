<template>
  <v-navigation-drawer absolute right dark temporary v-model="isOpenDrawer">
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
</template>

<script>
export default {
  props: ["links", "isOpenDrawer"]
};
</script>
