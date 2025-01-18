import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        catalog: 'catalog.html',
        company: 'company.html',
        news: 'news.html',
        newsInner: 'news-inner.html',
        pages: 'pages.html',
      },
    },
  },
});
