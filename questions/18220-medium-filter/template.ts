type Filter<T extends any[], P> =
T extends [infer L, ... infer R]
  ? L extends P
    ? [L, ...Filter<R, P>]
    : [...Filter<R, P>]
  : T

type X = Filter<[0, 1, 2], 2> // [2]
