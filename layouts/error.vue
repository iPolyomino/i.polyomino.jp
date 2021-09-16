<template>
  <v-main>
    <v-flex xs12 sm10 offset-sm1>
      <v-layout row wrap v-for="article in articles" :key="article.key">
        <v-flex xs12 v-if="article.title == error.statusCode">
          <word-component :title="article.title" :sentence="article.sentence" />
          <sitemap-component />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-main>
</template>

<script>
import WordComponent from "~/components/Word.vue";
import SitemapComponent from "~/components/Sitemap.vue";

export default {
  props: ["error"],
  data() {
    return {
      articles: [
        {
          title: "404",
          sentence: {
            text: "ページが見つかりませんでした。",
          },
        },
      ],
    };
  },
  components: {
    WordComponent,
    SitemapComponent,
  },
};
</script>
