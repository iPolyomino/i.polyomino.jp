<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <trpg-component />
      <footer-component />
    </v-flex>
  </v-main>
</template>

<script>
import TrpgComponent from "~/components/trpg.vue";
import FooterComponent from "~/components/Footer.vue";

export default {
  components: {
    TrpgComponent,
    FooterComponent,
  },
};
</script>
