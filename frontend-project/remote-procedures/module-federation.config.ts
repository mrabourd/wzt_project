import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
import tailwindConfig from './tailwind.config.cjs';

export default createModuleFederationConfig({
  name: 'remote_procedures',
  exposes: {
    './ProceduresPage': './src/layout/ProceduresPage.tsx',
  },
  filename: 'ProceduresList',
  shared: {
    // ...dependencies,
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
  dts: false
});