import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Server1/',   // 👈 must match your repo name
  plugins: [vue()]
})
