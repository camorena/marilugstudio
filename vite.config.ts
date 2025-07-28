import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __EMAILJS_SERVICE_ID__: JSON.stringify(process.env.REACT_APP_EMAILJS_SERVICE_ID || ''),
    __EMAILJS_TEMPLATE_ID__: JSON.stringify(process.env.REACT_APP_EMAILJS_TEMPLATE_ID || ''),
    __EMAILJS_PUBLIC_KEY__: JSON.stringify(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''),
  },
});
