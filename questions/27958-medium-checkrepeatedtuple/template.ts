type IsInTuple<T, Tuple extends unknown[]> =
  Tuple extends [infer First, ...infer Rest]
    ? IsEqual<T, First> extends true
      ? true
      : IsInTuple<T, Rest>
    : false

type CheckRepeatedTuple<T extends unknown[], Visited extends unknown[] = []> =
  T extends [infer L, ...infer R]
    ? IsInTuple<L, Visited> extends true
      ? true
      : CheckRepeatedTuple<R, [...Visited, L]>
    : false
