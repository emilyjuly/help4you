// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }],
      title: 'Help 4 you',
    },
  },
  css: ['primeflex/primeflex.css'],
  modules: ['@nuxt/icon', 'nuxt-primevue'],
});
