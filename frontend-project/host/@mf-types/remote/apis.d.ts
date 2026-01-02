
    export type RemoteKeys = 'remote/ResourceList';
    type PackageType<T> = T extends 'remote/ResourceList' ? typeof import('remote/ResourceList') :any;