<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="light-blue lighten-5" class="mx-2 my-2" v-for="info in aboutme" :key="info.key">
          <v-container fluid grid-list-lg>
            <div v-html="info"></div>
          </v-container>
        </v-card>
        <footer-component/>
      </v-flex>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import BackgroundComponent from "~/components/Background.vue";
import NavigationComponent from "~/components/Navigation.vue";
import FooterComponent from "~/components/Footer.vue";
import favoriteLanguage from "~/static/favoriteLanguage.md";

export default {
  components: {
    BackgroundComponent,
    NavigationComponent,
    FooterComponent
  },
  computed: {
    aboutme() {
      return [favoriteLanguage];
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
