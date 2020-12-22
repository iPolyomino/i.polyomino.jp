<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="mx-2 my-2">
        <v-container>
          <h1>Morse code</h1>
          <v-simple-table>
            <thead>
              <tr>
                <th>English</th>
                <th>phonetic alphabet</th>
                <th>Morse</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in morse" :key="m.letter">
                <td>{{ m.letter }}</td>
                <td>{{ m.phonetic }}</td>
                <td v-html="encode(m.code)"></td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-container>
      </v-card>
    </v-flex>
  </v-main>
</template>

<script>
import morse from "~/static/morse.json";

export default {
  data() {
    return {
      dit: "&bull;",
      dah: "&ndash;",
      morse,
    };
  },
  methods: {
    encode(code) {
      return code.replace(/\./g, this.dit).replace(/-/g, this.dah);
    },
  },
};
</script>
