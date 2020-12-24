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
    <v-card-text class="d-none d-md-block">
      <p><kbd>Space</kbd> キーでモールス信号を入力することができます。</p>
      <p><kbd>Enter</kbd> キーで入力終了</p>
      <p><kbd>Backspace</kbd> キーで入力削除</p>
      <v-text-field
        label="threshold [ms]"
        v-model="threshold"
        :min="10"
        type="number"
      ></v-text-field>
    </v-card-text>
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
      threshold: 150,
    };
  },
  methods: {
    color() {
      if (this.isCorrect === null) return;

      return this.isCorrect ? "blue" : "red";
    },
    ditClick() {
      this.code += this.dit;
    },
    dahClick() {
      this.code += this.dah;
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
  mounted() {
    let downTime = null;
    document.onkeydown = (e) => {
      // backspace key
      if (e.keyCode === 8 && this.isCorrect === null) {
        this.clearCode();
      }
      // enter key
      if (e.keyCode === 13) {
        this.answer();
      }
      // space key
      if (e.keyCode === 32 && downTime === null) {
        downTime = Date.now();
      }
    };
    document.onkeyup = (e) => {
      if (e.keyCode !== 32 || this.isCorrect !== null) {
        return;
      }
      const plessTime = Date.now() - downTime;
      downTime = null;
      if (plessTime < this.threshold) {
        this.ditClick();
      } else {
        this.dahClick();
      }
    };
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
