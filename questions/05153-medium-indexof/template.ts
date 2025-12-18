type IndexOf<T extends readonly unknown[], U, C extends unknown[] = []> =
  T extends [infer L, ...infer R extends readonly unknown[]]
    ? IsEqual<L, U> extends true
      ? C['length']
      : IndexOf<R, U, [...C, unknown]>
    : -1
