<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
      <v-flex xs12 sm10 offset-sm1>
        <v-layout row wrap>
          <v-flex v-if="article.title==error.statusCode" xs12 v-for="article in articles" :key="article.key">
            <word-component :title="article.title" :sentence="article.sentence" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import BackgroundComponent from "~/components/Background.vue";
import NavigationComponent from "~/components/Navigation.vue";
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
                url: "/"
              },
              {
                name: "About Me",
                url: "/aboutme"
              }
            ]
          }
        }
      ]
    };
  },
  components: {
    BackgroundComponent,
    NavigationComponent,
    WordComponent
  }
};
</script>
