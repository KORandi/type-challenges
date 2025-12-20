type All<T extends unknown[], U> =
T extends [infer L, ...infer R]
  ? IsEqual<L, U> extends true
    ? All<R, U>
    : false
  : true
