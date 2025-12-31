import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
// import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(), 
    // pluginTailwindCSS(),
    pluginModuleFederation({
      name: 'host-shell',
      remotes: {
        addresses: 'remote_addresses@http://localhost:3002/mf-manifest.json',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
        '@mui/material': { singleton: true },
        '@mui/x-data-grid': { singleton: true },}
    }),
  ],
  server: {
    port: 3001,
  },
});
