<template>
  <v-card color="light-blue lighten-5" class="mx-2 my-2">
    <v-container>
      <h1>サイトマップ</h1>
      <nav>
        <li>
          <ul>
            <router-link to="/">トップ</router-link>
          </ul>
          <ul>
            <router-link to="/aboutme">Hagi について</router-link>
          </ul>
          <ul>
            <router-link to="/blog">ブログ</router-link>
          </ul>
          <ul>
            <router-link to="/hobby">趣味</router-link>
          </ul>
          <ul>
            <router-link to="/dtnsim">DTN シミュレータ</router-link>
          </ul>
          <ul>
            <router-link to="/sitemap">サイトマップ</router-link>
          </ul>
          <ul>
            <router-link to="/morse">モールス信号表</router-link>
          </ul>
          <ul>
            <router-link to="/morse/quiz">モールス信号クイズ</router-link>
          </ul>
        </li>
      </nav>
    </v-container>
  </v-card>
</template>

<style>
li {
  list-style: none;
  padding: 0;
  margin: 8px;
}
nav li ul {
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 0;
}
</style>
