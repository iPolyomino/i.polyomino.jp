<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
      <v-flex xs12 sm8 offset-sm2>
        <polyomino-component/>
        <v-card color="light-blue lighten-5" class="my-3">
          Hello World.
          <code>console.log("hello world")</code>
        </v-card>
        <v-card color="light-blue lighten-5" class="my-3">
          Hello World.
          <code>console.log("hello world")</code>
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
import PolyominoComponent from '~/components/polyomino.vue'
import ArticleComponent from '~/components/Article.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  mounted() {

  },
  components: {
    PolyominoComponent,
    BackgroundComponent,
    NavigationComponent,
    FooterComponent
  }
}
</script>
