<template>
  <v-card color="light-blue lighten-5" class="mx-2 my-5 text-xs-center">
    <img v-if="media != null" :src="getImgUrl(media)" :alt="media" />
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="text-center">
            <div class="display-4">{{ title }}</div>
            <div>{{ sentence.text }}</div>
            <v-btn
              text
              v-for="link in sentence.links"
              :key="link.key"
              color="light-blue"
              :href="link.url"
              >{{ link.name }}</v-btn
            >
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["media", "title", "sentence"],
  methods: {
    getImgUrl(img) {
      return require("@/static/image/" + img);
    },
  },
};
</script>
