import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@footer': '/src/components/footer',
      '@headwer_bar': '/src/components/header_bar',
      '@hero_bars': '/src/components/hero_bars',
      '@other': '/src/components/other',
      '@data': '/src/data',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@recipes': '/src/components/recipes',
      '@lists': '/src/components/lists',
    }
  }
});