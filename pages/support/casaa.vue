<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <casaa-component />
      <footer-component />
    </v-flex>
  </v-main>
</template>

<script>
import CasaaComponent from "~/components/casaa.vue";
import FooterComponent from "~/components/Footer.vue";

export default {
  components: {
    CasaaComponent,
    FooterComponent,
  },
};
</script>
