<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <navigation-component/>
    <v-content class="main-contents">
      <v-flex xs12 sm8 offset-sm2>
        <polyomino-component/>
        <v-card color="light-blue lighten-5" class="my-3">
          Hello World.
          <code>console.log("hello world")</code>
        </v-card>
        <div v-for="article in articles" :key="article.key">
          <article-component :title="article.title" :sentence="article.sentence" />
        </div>
        <footer-component/>
      </v-flex>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import BackgroundComponent from '~/components/Background.vue'
import NavigationComponent from '~/components/Navigation.vue'
import PolyominoComponent from '~/components/polyomino.vue'
import ArticleComponent from '~/components/Article.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  data() {
    return {
      articles: [{
          title: 'Hagiについて',
          sentence: {
            text: '2018年現在，大学3年生．へなちょこプログラマ．ウェブサイトの作成やiPhoneアプリの作成をしてきました．データビジュアライゼーションに興味があります．',
            links: [{
                'name': 'Twitter',
                'url': 'https://twitter.com/iPolyomino'
              },
              {
                'name': 'Mastodon ',
                'url': 'https://mstdn.jp/@iPolyomino'
              },
              {
                'name': 'GitHub',
                'url': 'https://github.com/iPolyomino'
              },
              {
                'name': 'Blog',
                'url': 'http://polyomino.hatenablog.jp/'
              }
            ]
          }
        },
        {
          title: 'ポリオミノ(Polyomino)',
          sentence: {
            text: '複数の正方形を辺でつなげた多角形．また，それを長方形など指定の形に隙間なく並べるパズル．'
          }
        },
        {
          title: 'ほしい物リスト',
          sentence: {
            links: [{
              name: '買って♥',
              url: 'http://amzn.asia/0XqBHa7'
            }]
          }
        }
      ]
    }
  },
  components: {
    BackgroundComponent,
    NavigationComponent,
    PolyominoComponent,
    ArticleComponent,
    FooterComponent
  }
}
</script>
