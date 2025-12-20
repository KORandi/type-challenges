type PermutationsOfTuple<T extends unknown[]> =
T extends [infer L, ...infer R]
  ? R extends [infer LL, ...infer Rest]
    ? [L, ...PermutationsOfTuple<R>] | [LL, ...PermutationsOfTuple<[L, ...Rest]>] | [...PermutationsOfTuple<[L, ...Rest]>, LL] | [...PermutationsOfTuple<R>, L]
    : [L, ...PermutationsOfTuple<R>] | [...PermutationsOfTuple<R>, L]
  : []

type X = PermutationsOfTuple<[1, number, unknown]>
