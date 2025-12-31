import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote_addresses',
      exposes: {
        './ResourceList': './src/components/ResourceList.tsx',
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
  server: { port: 3002 },
});
