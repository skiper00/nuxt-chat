// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/app/styles/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },


  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'shadcn-nuxt',
    '@nuxtjs/supabase'
  ],


  supabase: {
    url: process.env.NUXT_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_KEY,
    redirect: false
  },


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