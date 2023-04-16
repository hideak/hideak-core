// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
