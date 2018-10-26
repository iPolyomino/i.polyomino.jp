<template>
<v-layout>
  <v-flex xs12>
    <background-component/>
    <drawer-component :links="links" :toggleDrawer="toggleDrawer" :isOpenDrawer="isOpenDrawer"/>
    <navigation-component :links="links" :toggleDrawer="toggleDrawer"/>
    <v-content class="main-contents">
      <v-flex xs12 sm10 offset-sm1>
        <hagi-component/>
        <v-layout row wrap>
          <v-flex v-if="article.media==null" xs12 v-for="article in articles" :key="article.key">
            <article-component :title="article.title" :sentence="article.sentence" />
          </v-flex>
          <v-flex v-else sm6>
            <article-component :media="article.media" :title="article.title" :sentence="article.sentence" />
          </v-flex>
        </v-layout>
        <footer-component/>
      </v-flex>
    </v-content>
  </v-flex>
</v-layout>
</template>

<script>
import BackgroundComponent from "~/components/Background.vue";
import NavigationComponent from "~/components/Navigation.vue";
import DrawerComponent from "~/components/Drawer.vue";
import HagiComponent from "~/components/Hagi.vue";
import ArticleComponent from "~/components/Article.vue";
import FooterComponent from "~/components/Footer.vue";

export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "About",
          link: "/aboutme"
        },
        {
          title: "Blog",
          link: "/blog"
        }
      ],
      isOpenDrawer: false,
      articles: [
        {
          title: "Hagiについて",
          sentence: {
            text:
              "2018年現在，大学3年生．へなちょこプログラマ．ウェブサイトの作成やiPhoneアプリの作成をしてきました．データビジュアライゼーションに興味があります．",
            links: [
              {
                name: "Twitter",
                url: "https://twitter.com/iPolyomino"
              },
              {
                name: "Mastodon ",
                url: "https://mstdn.jp/@iPolyomino"
              },
              {
                name: "GitHub",
                url: "https://github.com/iPolyomino"
              },
              {
                name: "Blog",
                url: "http://polyomino.hatenablog.jp/"
              }
            ]
          }
        },
        {
          media: "CasAA.png",
          title: "CasAA",
          sentence: {
            text:
              "ツイキャスで定型文を送信するiPhoneアプリです．アスキーアート(AA)を投稿することを想定して作りました．",
            links: [
              {
                name: "CasAA",
                url: "https://itunes.apple.com/jp/app/casaa/id1289298193"
              }
            ]
          }
        },
        {
          media: "TRPG_DICE.png",
          title: "TRPG DICE",
          sentence: {
            text:
              "TRPGでよく利用する 1D6 や 1D100 といった値を素早く出力ができるアプリです．初めて作ったiPhoneアプリです．",
            links: [
              {
                name: "TRPG DICE",
                url: "https://itunes.apple.com/jp/app/trpg-dice/id1096999521"
              }
            ]
          }
        },
        {
          media: "projection_mapping.jpg",
          title: "プロジェクションマッピング",
          sentence: {
            text:
              "プロジェクションマッピングにおけるインタラクティブパートの作成を行いました．A-Frameを用いたVRゲームです．",
            links: [
              {
                name: "プロジェクションマッピング",
                url:
                  "http://ist.ksc.kwansei.ac.jp/miwa/miwaLab/kgpm/interactive/"
              }
            ]
          }
        },
        {
          media: "pronama_time.jpg",
          title: "プロ生ちゃんの時間！",
          sentence: {
            text: "Google Chromeの拡張機能です．プロ生ちゃんによる時報です．",
            links: [
              {
                name: "プロ生ちゃんの時間！",
                url:
                  "https://chrome.google.com/webstore/detail/%E3%83%97%E3%83%AD%E7%94%9F%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E6%99%82%E9%96%93%EF%BC%81/ibjgndcedoonbjahcnhnongfgfelkadm"
              }
            ]
          }
        },
        {
          media: "virtual_science_fair.png",
          title: "Canada Wide Virtual Science Fair",
          sentence: {
            text:
              "Canada Wide Virtual Science Fairへ提出した作品です．チョコレートゲームとヌメロンの研究を行いました．",
            links: [
              {
                name: "Science Fair",
                url: "http://www.virtualsciencefair.org/2014/inou14m"
              }
            ]
          }
        },
        {
          media: "chocolategame.jpg",
          title: "全国中学高校Webコンテスト",
          sentence: {
            text:
              "全国中学高校Webコンテストへ提出した作品です．出来る限りシンプルなものになるように意識して作成しました．",
            links: [
              {
                name: "チョコレートゲーム",
                url: "http://chocolategame.jp/"
              }
            ]
          }
        },
        {
          title: "ポリオミノ(Polyomino)",
          sentence: {
            text:
              "複数の正方形を辺でつなげた多角形．また，それを長方形など指定の形に隙間なく並べるパズル．"
          }
        },
        {
          title: "ほしい物リスト",
          sentence: {
            links: [
              {
                name: "買って♥",
                url: "http://amzn.asia/0XqBHa7"
              }
            ]
          }
        }
      ]
    };
  },
  components: {
    BackgroundComponent,
    NavigationComponent,
    DrawerComponent,
    HagiComponent,
    ArticleComponent,
    FooterComponent
  },
  methods: {
    toggleDrawer() {
      this.isOpenDrawer = !this.isOpenDrawer;
    }
  }
};
</script>
