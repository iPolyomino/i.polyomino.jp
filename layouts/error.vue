<template>
  <v-content class="main-contents">
    <v-flex xs12 sm10 offset-sm1>
      <v-layout row wrap v-for="article in articles" :key="article.key">
        <v-flex xs12 v-if="article.title == error.statusCode">
          <word-component :title="article.title" :sentence="article.sentence" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-content>
</template>

<script>
import WordComponent from "~/components/Word.vue";

export default {
  props: ["error"],
  data() {
    return {
      articles: [
        {
          title: "404",
          sentence: {
            text: "ページが見つかりませんでした．",
            links: [
              {
                name: "Index",
                url: "/",
              },
              {
                name: "About Me",
                url: "/aboutme",
              },
              {
                name: "Blog",
                url: "/blog",
              },
            ],
          },
        },
      ],
    };
  },
  components: {
    WordComponent,
  },
};
</script>
