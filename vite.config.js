import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], server: {
    host: true, // Allows external access
    port: 5173, // Change if needed

  }
})
