<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <v-card color="light-blue lighten-5" class="mx-2 my-2">
        <v-container fluid grid-list-lg>
          <h1>{{ title }}</h1>
          <p class="mb-5 text-xs-right">{{ date }}</p>
          <div v-html="bodyHtml"></div>
          <v-btn text color="light-blue" href="/blog">記事一覧ページヘ</v-btn>
        </v-container>
      </v-card>
    </v-flex>
  </v-main>
</template>

<script>
import { sourceFileArray } from "~/posts/json/summary.json";

export default {
  validate({ params }) {
    return sourceFileArray.includes(`posts/${params.slug}.md`);
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/posts/json/${params.slug}.json`), {
      params,
    });
  },
};
</script>

<style>
li > p {
  margin-bottom: 8px !important;
  margin-top: 16px;
}
img {
  max-width: 640px;
  width: 100%;
  height: auto;
}
pre {
  background-color: #fbe5e1;
}
</style>
