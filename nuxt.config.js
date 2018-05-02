module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hagi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hagi\'s portfolio website.' }
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
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],
  loading: { color: '#03A9F4' },
  'google-analytics': {
    id: 'UA-81299115-1'
  },
  manifest: {
    name: 'Hagi',
    short_name:
      'Hagi',
    title:
      'Hagi',
    'og:title':
      'Hagi - portfolio website',
    description:
      'portfolio website',
    'og:description':
      'portfolio website',
    lang:
      'ja',
    theme_color:
      '#03A9F4',
    background_color:
      '#ffffff'
  },
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
