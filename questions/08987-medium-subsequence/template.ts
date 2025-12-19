type Subsequence<T extends any[]> =
T extends [infer L, ...infer R]
  ? [L] | Subsequence<R> | [L, ...Subsequence<R>]
  : []
