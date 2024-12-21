import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Permet à React Router de gérer les routes côté client
    historyApiFallback: true,
  },
});
