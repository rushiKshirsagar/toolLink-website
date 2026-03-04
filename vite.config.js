import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/toolLink-website/', // required for GitHub Pages (repo name)
  plugins: [react()],
})
