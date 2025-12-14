type Permutation<T extends string> = [T] extends [never]
  ? []
  : {
      [K in T]: [K, ...Permutation<T extends K ? never : T>]
    }[T]
