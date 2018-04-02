<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="light-blue lighten-5" class="my-3" v-for="info in aboutme" :key="info.key">
          <v-card-title primary-title>
            <div v-html="info"></div>
          </v-card-title>
        </v-card>
        <footer-component/>
      </v-flex>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import BackgroundComponent from '~/components/Background.vue'
import NavigationComponent from '~/components/Navigation.vue'
import FooterComponent from '~/components/Footer.vue'
import aboutme from '~/static/aboutme.md'
import favoriteLanguage from '~/static/favoriteLanguage.md'
import history from '~/static/history.md'

export default {
  components: {
    BackgroundComponent,
    NavigationComponent,
    FooterComponent
  },
  computed: {
    aboutme() {
      return [aboutme, favoriteLanguage, history]
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
