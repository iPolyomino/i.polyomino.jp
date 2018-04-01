<template>
<v-layout>
  <v-flex xs12>
    <navigation-component/>
    <v-content>
    <v-flex xs12 sm8 offset-sm2>
      Hello World.
    </v-flex>
    <footer-component/>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import NavigationComponent from '~/components/Navigation.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  components: {
    NavigationComponent,
    FooterComponent
  }
}
</script>
