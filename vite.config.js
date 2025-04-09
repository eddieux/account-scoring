import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Set base based on repository name
  // Use '/' for deployment to root (e.g., username.github.io)
  // Use '/repository-name/' for deployment to a subpath
  base: process.env.NODE_ENV === 'production'
    ? '/account-scoring/'
    : '/',
  build: {
    outDir: 'docs'
  }
})
