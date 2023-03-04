import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import autoImport from './config/vite-auto-import'

export default defineConfig({
  plugins: [glsl(), autoImport],
  base: './',
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
