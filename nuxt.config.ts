// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/app/styles/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'shadcn-nuxt',
    'prisma/nuxt'
  ],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },


  imports: {
  autoImport: true
},

  components: {
  dirs: [
    { path: '~/widgets', pathPrefix: false, },
    { path: '~/features', pathPrefix: false, },
    { path: '~/shared', pathPrefix: false, },
    { path: '~/pages', pathPrefix: false, },
    { path: '~/entities', pathPrefix: false, },
  ],
}
})