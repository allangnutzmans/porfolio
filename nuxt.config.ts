// This file should be renamed to nuxt.config.ts for Nuxt 3 compatibility.

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Target is now handled automatically in Nuxt 3
  app: {
    baseURL: '/',
    head: {
      title: 'Dashboard - Nuxt.js fast loading dashboard theme',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Dashboard ¬– is a lightweight, minimal, fast loading front-end dashboard theme.  It is built with Vue.js and Nuxt.js.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap',
        },
      ],
    },
  },
  css: ['normalize.css/normalize.css', '@/assets/style.scss'],
  modules: [
    '@pinia/nuxt',
  ],
  compatibilityDate: '2025-06-12',
})
