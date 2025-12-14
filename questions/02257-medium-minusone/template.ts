type MinusOne<T extends number, C extends readonly unknown[] = []> =
  C['length'] extends T
    ? C extends readonly [unknown, ...infer R] ? R['length'] : -1
    : MinusOne<T, readonly [...C, unknown]>
