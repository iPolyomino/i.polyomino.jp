<template>
  <v-main>
    <v-flex xs12 sm10 offset-sm1>
      <v-layout wrap>
        <v-flex xs12>
          <hagi-component />
        </v-flex>
        <v-flex xs12>
          <article-component
            :title="aboutme.title"
            :sentence="aboutme.sentence"
          ></article-component>
        </v-flex>
        <v-flex v-for="article in articles" :key="article.title" xs12 md6>
          <article-component
            :media="article.media"
            :title="article.title"
            :sentence="article.sentence"
          />
        </v-flex>
        <v-flex v-for="afterword in afterwords" :key="afterword.title" xs12>
          <article-component
            :title="afterword.title"
            :sentence="afterword.sentence"
          ></article-component>
        </v-flex>
        <v-flex xs12>
          <footer-component />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-main>
</template>

<script>
import HagiComponent from "~/components/Hagi.vue";
import ArticleComponent from "~/components/Article.vue";
import FooterComponent from "~/components/Footer.vue";
import HomeContent from "~/static/home.json";

export default {
  data() {
    return HomeContent;
  },
  components: {
    HagiComponent,
    ArticleComponent,
    FooterComponent,
  },
};
</script>
