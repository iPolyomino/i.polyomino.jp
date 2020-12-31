import { sourceFileArray } from "./posts/json/summary.json";

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "Hagi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Hagi's portfolio website.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
    ],
  },
  loading: { color: "#03A9F4" },
  css: ["~/assets/style/main.css"],
  buildModules: ["@nuxtjs/vuetify"],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/pwa"],
  plugins: [{ src: "~/plugins/vue-lazyload", ssr: false }],
  manifest: {
    name: "Hagi",
    short_name: "Hagi",
    title: "Hagi",
    "og:title": "Hagi - portfolio website",
    description: "portfolio website",
    "og:description": "portfolio website",
    lang: "ja",
    theme_color: "#03A9F4",
    background_color: "#ffffff",
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  target: "static",
  generate: {
    fallback: true,
    routes: () => {
      return sourceFileArray.map((path) => {
        const pageTag = path.match(/\d{4}-\d{2}-\d{2}-\d{4}/g);
        if (pageTag.length !== 1) {
          return;
        }
        return {
          route: "/blog/" + pageTag[0],
          payload: path,
        };
      });
    },
  },
};
