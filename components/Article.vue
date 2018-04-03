<template>
<v-card color="light-blue lighten-5" class="my-3">
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <div>
          <div class="headline">{{title}}</div>
          <div>{{sentence.text}}</div>
          <v-btn flat v-for="link in sentence.links" :key="link.key" color="light-blue" :href="link.url">{{link.name}}</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
export default {
  props: ['title', 'sentence']
}
</script>
