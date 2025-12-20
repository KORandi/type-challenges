type FindEles<T extends any[], Visited extends unknown[] = [], Result extends unknown[] = []> =
  T extends [infer L, ...infer R]
    ? Includes<[...R, ...Visited], L> extends true
      ? FindEles<R, [...Visited, L], Result>
      : FindEles<R, [...Visited, L], [...Result, L]>
    : Result
