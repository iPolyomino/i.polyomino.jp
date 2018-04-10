<template>
  <v-toolbar app fixed clipped-left dark color="grey">
    <v-toolbar-title>
      <nuxt-link class="white--text headline" to="/">polyomino.jp</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-navigation-drawer class='hidden-md-and-up' hide-overlay absolute right v-model='drawer' height='100vh'>
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.title" :href="link.link">
          {{ link.title }}
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar-side-icon class='hidden-md-and-up' @click.stop='drawer = !drawer'></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down" v-for="link in links" :key="link.title">
      <v-btn class="headline" flat :to="link.link">{{link.title}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            title: 'Home',
            link: '/'
          }, {
            title: 'About',
            link: '/aboutme'
          }
        ],
        drawer: false
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
