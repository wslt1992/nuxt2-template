const { env } = process
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs2-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    // https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    // 开启自动修复
    fix: true
  },
  styleResources: {
    scss: ['~assets/global.scss']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  proxy: [
    /*    // Proxies /foo to http://example.com/foo
    'http://example.com/foo',

    // Proxies /api/books/!*!/!**.json to http://example.com:8000
    'http://example.com:8000/api/books/!*!/!**.json', */

    // You can also pass more options
    // https://go.nuxtjs.dev/axios
    // 简写,将foo代理到http://icanhazip.com
    [`${env.api}/api`, { ws: false }]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // https://nuxtjs.org/docs/configuration-glossary/configuration-build#hardsource
    hardSource: true
    // cache:true
  },
  /* yarn generate相关配置 */
  generate: {
    // https://nuxtjs.org/docs/directory-structure/dist
    dir: 'dist', // 默认值为dist
    subFolders: false // 默认为true,将page放入子文件夹中
  },
  router: {
    // https://nuxtjs.org/docs/configuration-glossary/configuration-router#middleware
    // Run the middleware/auth.js on every page
    middleware: 'auth', // 用于鉴权登录状态

    mode: 'history',
    // https://nuxtjs.org/docs/configuration-glossary/configuration-router#extendroutes
    extendRoutes (routes, resolve) {
      /* 自定义路径 */
      const route = [
        {
          name: 'index2',
          path: '/index2',
          component: resolve(
            __dirname,
            'pages/index.vue'
          )
        }
      ]
      routes.push(...route)
    }
  },
  server: {
    /* 端口 */
    port: 4000 // default: 3000
  }
}
