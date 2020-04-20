<template>
  <v-content class="main-contents">
    <v-flex xs12 sm8 offset-sm2>
      <v-card
        color="light-blue lighten-5"
        class="mx-2 my-2"
        v-for="article in sortedArticles"
        :key="article.base"
      >
        <v-container fluid grid-list-lg>
          <h1>{{ article.title }}</h1>
          <p class="text-xs-right">{{ article.date }}</p>
          <p>{{ article.preview }}</p>
          <v-btn text color="light-blue" :href="getUrl(article.base)"
            >記事ページヘ</v-btn
          >
        </v-container>
      </v-card>
      <footer-component />
    </v-flex>
  </v-content>
</template>

<script>
import FooterComponent from "~/components/Footer.vue";
import summary from "~/posts/json/summary.json";

export default {
  components: {
    FooterComponent
  },
  computed: {
    sortedArticles: () => {
      const articles = Object.keys(summary.fileMap).map(key => {
        return summary.fileMap[key];
      });
      const compare = (a, b) => {
        if (a.base < b.base) return 1;
        if (a.base > b.base) return -1;
        return 0;
      };
      return articles.sort(compare);
    }
  },
  methods: {
    getUrl: jsonFileName => {
      const url = jsonFileName.match(/\d{4}-\d{2}-\d{2}-\d{4}/g);
      if (url == null || url.length !== 1) {
        return null;
      }
      return `/blog/${url[0]}`;
    }
  }
};
</script>
