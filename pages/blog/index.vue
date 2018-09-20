<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
      <v-flex xs12 sm8 offset-sm2>
        <v-card color="light-blue lighten-5" class="mx-2 my-2" v-for="article in fileMap" :key="article.base">
          <v-container fluid grid-list-lg>
            <h1>{{article.title}}</h1>
            <p class="text-xs-right">{{article.date}}</p>
            <p>{{article.preview}}</p>
            <v-btn flat large color="light-blue" :href="getUrl(article.base)">記事ページヘ</v-btn>
          </v-container>
        </v-card>
        <footer-component/>
      </v-flex>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import BackgroundComponent from "~/components/Background.vue";
import NavigationComponent from "~/components/Navigation.vue";
import FooterComponent from "~/components/Footer.vue";
import favoriteLanguage from "~/static/favoriteLanguage.md";
import summary from "~/posts/json/summary.json";

export default {
  components: {
    BackgroundComponent,
    NavigationComponent,
    FooterComponent
  },
  asyncData() {
    return summary;
  },
  methods: {
    getUrl(jsonFileName) {
      const url = jsonFileName.match(/\d{4}-\d{2}-\d{2}-\d{4}/g);
      if (url == null || url.length !== 1) {
        return null;
      }
      return `/blog/${url[0]}`;
    }
  }
};
</script>
