type Triangular<N extends number, Counter extends unknown[] = [], Result extends unknown[] = []> =
Counter['length'] extends N
  ? Result['length']
  : [unknown, ...Counter] extends infer C extends unknown[]
      ? Triangular<N, C, [...Result, ...ConstructTuple<C['length']>]>
      : never
