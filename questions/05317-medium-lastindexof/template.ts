type LastIndexOf<T extends unknown[], U, Result extends number = -1, C extends unknown[] = []> =
T extends [infer L, ...infer R]
  ? IsEqual<L, U> extends true
    ? LastIndexOf<R, U, C['length'], [...C, unknown]>
    : LastIndexOf<R, U, Result, [...C, unknown]>
  : Result
