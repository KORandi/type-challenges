type Reverse<T extends Array<unknown>> =
T extends [...infer L, infer R]
  ? [R, ...Reverse<L>]
  : T
