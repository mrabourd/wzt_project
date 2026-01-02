import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
// import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import mfConfig from './module-federation.config';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact(), 
    // pluginTailwindCSS(),
    pluginModuleFederation(mfConfig)
  ],
  server: {
    port: 3001,
  },
});
