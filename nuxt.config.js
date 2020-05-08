export default {
  mode: 'spa',
  debug: false,
  /*
  ** Headers of the page
  */
  head: {
    title: "Tushar ghosh Joy",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: "Tushar ghosh Joy's portfolio"}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      },
      {
        rel: 'stylesheet',
        type: "text/css",
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },
  webfontloader: {
    google: {
      families: [
        'Lato:300,400,500,700,900',
        'Open+Sans:300,400,500,700,900',
        'Poppins:300,400,500,700,900',
      ]
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    name: 'circle',
    color: '#3B8070',
  },

  /*
  ** Global CSS
  */
  css: [
    '@/static/css/styles.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    'vue-scrollto/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  }
}
