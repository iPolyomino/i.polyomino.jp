<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <QuizComponent />
    </v-flex>
  </v-main>
</template>

<script>
import QuizComponent from "~/components/Quiz.vue";

export default {
  components: {
    QuizComponent,
  },
};
</script>
