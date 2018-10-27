 <template>
  <v-toolbar app fixed clipped-left dark color="grey">
    <v-toolbar-title>
      <nuxt-link class="white--text headline" to="/">polyomino.jp</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down" v-for="link in links" :key="link.title">
      <v-btn class="headline" flat :to="link.link">{{link.title}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
