type ReplaceFirst<T extends readonly unknown[], S, R> =
T extends [infer L, ...infer Rest]
  ? L extends S
    ? [R, ...Rest]
    : [L, ...ReplaceFirst<Rest, S, R>]
  : []
