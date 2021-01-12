<template>
  <v-card color="light-blue lighten-5" class="mx-2 my-2">
    <v-container>
      <h1>Amateur Radio</h1>
      <p>My call sign: JQ3CJL</p>
      <hr />
      <h2>Information</h2>
      <h3>Licence</h3>
      <p>Amateur Fourth-Class Radio Operator</p>
      <h3>Transceiver</h3>
      <ul>
        <li>
          <a
            href="https://twitter.com/iPolyomino/status/1334088933076918273"
            target="_blank"
            rel="noopener"
            >FT1XD</a
          >
        </li>
      </ul>
      <h3>Antenna</h3>
      <ul>
        <li>SRH789</li>
        <li>SRH805S</li>
      </ul>
      <h2>Learning</h2>
      <ul>
        <li>
          <router-link to="morse">Morse code</router-link>
        </li>
        <li>
          <router-link to="morse/quiz">Morse code quiz</router-link>
        </li>
      </ul>
    </v-container>
  </v-card>
</template>
