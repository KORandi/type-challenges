type ReplaceFirst<T extends readonly unknown[], S, R> =
T extends [infer L, ...infer Rest]
  ? L extends S
    ? [R, ...Rest]
    : [L, ...ReplaceFirst<Rest, S, R>]
  : []

type X = ReplaceFirst<[1, 2, 3], 3, 4>
