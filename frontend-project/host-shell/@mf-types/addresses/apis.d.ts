
    export type RemoteKeys = 'addresses/ResourceList';
    type PackageType<T> = T extends 'addresses/ResourceList' ? typeof import('addresses/ResourceList') :any;