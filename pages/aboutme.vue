<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <v-card
        color="light-blue lighten-5"
        class="mx-2 my-2"
        v-for="info in aboutme"
        :key="info.key"
      >
        <v-container fluid grid-list-lg>
          <div v-html="info"></div>
        </v-container>
      </v-card>
      <footer-component />
    </v-flex>
  </v-main>
</template>

<script>
import FooterComponent from "~/components/Footer.vue";
import aboutme from "~/static/aboutme.md";
import history from "~/static/history.md";
import life from "~/static/life.md";

export default {
  components: {
    FooterComponent,
  },
  computed: {
    aboutme: () => {
      return [aboutme, history, life];
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
