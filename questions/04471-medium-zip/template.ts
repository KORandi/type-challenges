type Zip<T extends Array<unknown>, U extends Array<unknown>> =
T extends [infer L1, ...infer R1]
  ? U extends [infer L2, ...infer R2]
    ? [[L1, L2], ...Zip<R1, R2>]
    : U
  : T
