module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hagi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  css: [
    '~/assets/style/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit'
  ],
  loading: { color: '#03A9F4' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'babel-polyfill'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
