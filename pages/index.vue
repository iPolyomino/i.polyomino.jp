<template>
  <v-content class="main-contents">
    <v-flex xs12 sm10 offset-sm1>
      <hagi-component />
      <v-layout row wrap>
        <v-flex xs12>
          <article-component
            :title="aboutme.title"
            :sentence="aboutme.sentence"
          >
          </article-component>
        </v-flex>
        <v-flex v-for="article in articles" :key="article.title" sm6>
          <article-component
            :media="article.media"
            :title="article.title"
            :sentence="article.sentence"
          />
        </v-flex>
        <v-flex v-for="afterword in afterwords" :key="afterword.title" xs12>
          <article-component
            :title="afterword.title"
            :sentence="afterword.sentence"
          >
          </article-component>
        </v-flex>
      </v-layout>
      <footer-component />
    </v-flex>
  </v-content>
</template>

<script>
import HagiComponent from "~/components/Hagi.vue";
import ArticleComponent from "~/components/Article.vue";
import FooterComponent from "~/components/Footer.vue";

export default {
  data() {
    return {
      aboutme: {
        title: "Hagiについて",
        sentence: {
          text:
            "大学3年生．へなちょこプログラマ．ウェブサイトの作成やiPhoneアプリの作成をしてきました．データビジュアライゼーションに興味があります．",
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
              url: "/blog"
            }
          ]
        }
      },
      articles: [
        {
          media: { webp: "kasgai.webp", png: "kasgai.png" },
          title: "Kasgai",
          sentence: {
            text: "現在作成中…",
            links: [
              {
                name: "Kasgai",
                url: "https://kasgai-com.appspot.com/"
              },
              {
                name: "GitHub",
                url: "https://github.com/Kasgai"
              }
            ]
          }
        },
        {
          media: { webp: "dtnsim.webp", jpg: "dtnsim.jpg" },
          title: "DTNシミュレータ",
          sentence: {
            text:
              "DTN(Delay/Disruption-Tolerant Networking)のシミュレータをJavaScriptにて実装しました．現在，エピデミックブロードキャストのみに対応しています．",
            links: [
              {
                name: "DTNシミュレータ",
                url: "/dtnsim"
              }
            ]
          }
        },
        {
          media: { webp: "kaguya_world.webp", jpg: "kaguya_world.jpg" },
          title: "光輝くかぐやの世界",
          sentence: {
            text:
              "国際学生対抗バーチャルリアリティコンテストにおいて選考を通過し，展示を行いました．かぐや姫の気持ちを体感できるVRゲームを作成しました．この開発はチームでの開発で行い，私はArduinoの制御プログラムを担当しました．",
            links: [
              {
                name: "光輝くかぐやの世界",
                url: "https://www.youtube.com/watch?v=3LsmLCUXDGg"
              },
              {
                name: "ソースコード",
                url: "https://github.com/creativeIKEP/ShineKaguyaWorldVR"
              }
            ]
          }
        },
        {
          media: { webp: "CasAA.webp", png: "CasAA.png" },
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
          media: { webp: "TRPG_DICE.webp", png: "TRPG_DICE.png" },
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
          media: {
            webp: "projection_mapping.webp",
            jpg: "projection_mapping.jpg"
          },
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
          media: { webp: "pronama_time.webp", jpg: "pronama_time.jpg" },
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
          media: {
            webp: "virtual_science_fair.webp",
            png: "virtual_science_fair.png"
          },
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
          media: { webp: "chocolategame.webp", jpg: "chocolategame.jpg" },
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
        }
      ],
      afterwords: [
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
    HagiComponent,
    ArticleComponent,
    FooterComponent
  }
};
</script>
