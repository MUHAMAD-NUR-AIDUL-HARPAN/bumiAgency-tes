import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/bumiAgency-tes/', 
  plugins: [
    tailwindcss(),
  ],
})