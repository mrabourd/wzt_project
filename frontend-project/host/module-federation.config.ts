import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    addresses: 'remote_addresses@http://localhost:3002/mf-manifest.json',
  },
  shared: {
    // ...dependencies,
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
  dts: false,
});