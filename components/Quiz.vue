<template>
  <v-card class="mx-2 my-2">
    <v-card-title>{{ morse[index].letter }}</v-card-title>
    <v-card-subtitle>{{ morse[index].phonetic }}</v-card-subtitle>
    <v-container :class="color()" class="">
      <v-row no-gutters>
        <v-col cols="9">
          <v-card-text v-html="code" class="morse preview"></v-card-text>
        </v-col>
        <v-col cols="3">
          <v-card-actions>
            <v-btn
              :disabled="isCorrect !== null"
              class="ma-2"
              text
              @click="clearCode"
            >
              <v-icon left>cancel</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
    <v-card-text class=""></v-card-text>
    <v-card-actions>
      <v-btn
        x-large
        :disabled="isCorrect !== null"
        @click="ditClick"
        class="morse"
        >&bull;</v-btn
      >
      <v-btn
        x-large
        :disabled="isCorrect !== null"
        @click="dahClick"
        class="morse"
        >&ndash;</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn x-large color="primary" @click="answer">OK</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import morse from "~/static/morse.json";

export default {
  data() {
    return {
      code: "",
      dit: "&bull;",
      dah: "&ndash;",
      isCorrect: null,
      index: Math.floor(Math.random() * morse.length),
      morse: morse,
    };
  },
  methods: {
    color() {
      if (this.isCorrect === null) return;

      return this.isCorrect ? "blue" : "red";
    },
    ditClick() {
      this.code = this.code + this.dit;
    },
    dahClick() {
      this.code = this.code + this.dah;
    },
    clearCode() {
      this.isCorrect = null;
      this.code = "";
    },
    encode(code) {
      return code.replace(/\./g, this.dit).replace(/-/g, this.dah);
    },
    answer() {
      if (this.isCorrect === null) {
        const encodeMorse = this.encode(this.morse[this.index].code);
        this.isCorrect = this.code == encodeMorse;
        this.code = encodeMorse;
        return;
      }

      this.clearCode();
      this.index = Math.floor(Math.random() * this.morse.length);
    },
  },
};
</script>

<style scoped>
.morse {
  font-size: 5rem;
}

.preview {
  min-height: 3rem;
}

.red {
  color: white;
  background-color: red;
}

.blue {
  color: white;
  background-color: blue;
}
</style>
