export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Auth module configiration
   */
  auth: {
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/callback',
      home: '/',
    },
    strategies: {
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            'http://localhost:8080/auth/realms/test/protocol/openid-connect/auth',
          token:
            'http://localhost:8080/auth/realms/test/protocol/openid-connect/token',
          logout:
            'http://localhost:8080/auth/realms/test/protocol/openid-connect/logout?redirect_uri=' +
            encodeURI('http://localhost:3000/login'),
        },
        responseType: 'id_token token',
        clientId: 'account',
        scope: ['openid'],
      },
    },
    localStorage: false,
  },
  router: {
    middleware: ['token-check', 'auth'],
  },
}
