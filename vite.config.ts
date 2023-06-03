import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // this server prop is necessary to build a docker image and run a container
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
