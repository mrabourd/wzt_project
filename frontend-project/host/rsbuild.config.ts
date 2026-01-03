import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import mfConfig from './module-federation.config';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(), 
    pluginTailwindCSS({
      tailwindcssPath: './tailwind.config.cjs',
    }),
    pluginModuleFederation(mfConfig)
  ],
  html: {
    template: './src/index.html', 
    mountId: 'root', 
  },
  dev: {
    client: {
      reconnect: 5,
    },
    watchFiles: [
      {
        paths: ['src/**/*'],
        options: {
          usePolling: true,
          interval: 1000,
        },
      },
    ],
  },
  tools: {
    postcss: (opts) => {
      opts.postcssOptions = {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      };
    },
  },
  server: {
    port: 3001,
  },
});
