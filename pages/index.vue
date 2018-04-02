<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
    <v-flex xs12 sm8 offset-sm2>
      Hello World.
      <code>console.log("hello world")</code>
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

export default {
  components: {
    BackgroundComponent,
    NavigationComponent,
    FooterComponent
  }
}
</script>
