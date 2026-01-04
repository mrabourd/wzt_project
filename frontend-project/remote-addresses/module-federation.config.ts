import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'remote_addresses',
  exposes: {
    './AddressPage': './src/pages/AddressPage.tsx',
  },
  filename: 'ResourceList',
  shared: {
    // ...dependencies,
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
});