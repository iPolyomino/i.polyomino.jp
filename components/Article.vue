<template>
  <v-card color="light-blue lighten-5" class="mx-2 my-2">
    <picture v-if="media != null">
      <source
        v-if="media.webp != null"
        :srcset="getImgUrl(media.webp)"
        type="image/webp"
      />
      <source
        v-if="media.jpg != null"
        :srcset="getImgUrl(media.jpg)"
        type="image/jpeg"
      />
      <source
        v-if="media.png != null"
        :srcset="getImgUrl(media.png)"
        type="image/png"
      />
      <img
        v-if="media.jpg != null"
        v-lazy="getImgUrl(media.jpg)"
        :alt="media.alt"
      />
      <img
        v-else-if="media.png != null"
        v-lazy="getImgUrl(media.png)"
        :alt="media.alt"
      />
    </picture>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <div>
            <div class="headline">{{ title }}</div>
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
