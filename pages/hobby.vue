<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <ham-component />
      <electronic-work-component />
      <footer-component />
    </v-flex>
  </v-main>
</template>

<script>
import HamComponent from "~/components/Ham.vue";
import ElectronicWorkComponent from "~/components/ElectronicWork.vue";
import FooterComponent from "~/components/Footer.vue";

export default {
  components: {
    HamComponent,
    ElectronicWorkComponent,
    FooterComponent,
  },
};
</script>
