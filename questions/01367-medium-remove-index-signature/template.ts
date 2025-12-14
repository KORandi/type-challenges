type RemoveIndexSignature<T> = { [K in keyof T as {} extends Record<K, unknown> ? never : K]: T[K] }
