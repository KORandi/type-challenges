type Combs<T extends string[]> =
  T extends [infer L extends string, ...infer R extends string[]]
    ? `${L} ${R[number]}` | Combs<R>
    : never
