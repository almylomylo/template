import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import sass from 'sass';
import path from 'path';
import {splitVendorChunkPlugin} from 'vite';
// import webfontDownload from 'vite-plugin-webfont-dl';

// import {compression} from 'vite-plugin-compression2';

export default defineConfig({
  server: {
    // host: '192.168.1.22',
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
    splitVendorChunkPlugin(),
    // webfontDownload(['https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap']),
    // compression({include: [/\.(js)$/, /\.(css)$/], deleteOriginalAssets: true}),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, './src/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `
          @import "./src/core/styles/variables.module.scss";
          `,
      },
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // if (id.includes('react-dom') || id.includes('react-router-dom')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
            // }
          }
          // if (id.includes('react-router-dom') || id.includes('react-router')) {
          //   return '@react-router';
          // }
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg|ico)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff|woff2|ttf|eot)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 1600,
    target: 'esnext', //browsers can handle the latest ES features
  },
});
