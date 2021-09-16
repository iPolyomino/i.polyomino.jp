<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <sitemap-component />
      <footer-component />
    </v-flex>
  </v-main>
</template>

<script>
import SitemapComponent from "~/components/Sitemap.vue";
import FooterComponent from "~/components/Footer.vue";

export default {
  components: {
    SitemapComponent,
    FooterComponent,
  },
};
</script>
