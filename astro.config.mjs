import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://remodzz.com',
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
